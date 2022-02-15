import { Container, Grid } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import Title from "Components/About/Title";
import Projects from "Components/About/Projects";
import Vector from "Components/About/Vector";
import AboutInfo from "Components/About/AboutInfo";

//SEO
import Seo from "Utilis/Seo";

const about = () => {
    return (
        <Layout activePage="about">
            <Seo title="About Cabbage | The Fearless Programming!" />
            <Container maxWidth={false} component="section" disableGutters sx={{ py: "30px" }}>
                <Title />
                <Grid container columnSpacing={3} sx={{ alignItems: "center" }}>
                    <Grid item md={6}>
                        <Vector />
                    </Grid>
                    <Grid item md={6}>
                        <AboutInfo />
                    </Grid>
                </Grid>
                <Projects />
            </Container>
        </Layout>
    );
};
export default about;