import { useState, useMemo, useEffect } from "react";
import { Container, Grid } from "@mui/material";

//Redux
import { wrapper } from "Redux/store";
import { getVideo } from "Redux/Actions/videoAction";
import { useSelector } from "react-redux";

//Layouts
import Layout from "Layout";

//Components
import Player from "Components/Home/Player";
import Cabbage from "Components/Home/Cabbage";
import Videos from "Components/Home/Videos";

//SEO
import Seo from "Utilis/Seo";

const Index = () => {
  const { videos, firstRender } = useSelector(state => state.getVideos);
  const [current, setCurrent] = useState(0);
  const [videoList, setVideoList] = useState(videos);
  useMemo(() => {
    if (firstRender) {
      setVideoList((video) => [...video, ...videos]);
    }
  }, [videos, firstRender]);
  return (
    <Layout activePage="home">
      <Seo title="Cabbage | The Fearless Programming!" />
      <Container maxWidth={false} component="section" disableGutters sx={{ py: "30px" }}>
        <Grid container columnSpacing={2}>
          <Grid item md={8}><Player current={current} videoList={videoList} /></Grid>
          <Grid item md={4}><Cabbage /></Grid>
        </Grid>
        <Videos setCurrent={setCurrent} videoList={videoList} />
      </Container>
    </Layout>
  );
};
export default Index;

//Serversider data fatching
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      await store.dispatch(getVideo());
    }
)