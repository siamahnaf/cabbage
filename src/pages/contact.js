import { Container, Grid } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import Title from "Components/Contact/Title";
import Vector from "Components/Contact/Vector";
import Map from "Components/Contact/Map";
import Team from "Components/Contact/Team";

//SEO
import Seo from "Utilis/Seo";

const contact = () => {
    return (
        <Layout activePage="contact">
            <Seo title="Contact Cabbage | The Fearless Programming!" />
            <Container maxWidth={false} component="section" disableGutters sx={{ py: "30px" }}>
                <Title />
                <Grid container columnSpacing={2}>
                    <Grid item md={7}>
                        <Vector />
                    </Grid>
                    <Grid item md={5}>
                        <Map />
                    </Grid>
                </Grid>
                <Team />
            </Container>
        </Layout>
    );
};
export default contact;