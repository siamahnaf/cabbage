import { Container, Grid } from "@mui/material";

//Components
import Subscribe from "Components/Footer/Subscribe";
import Copyright from "Components/Footer/Copyright";

const Footer = () => {
    return (
        <Container maxWidth={false} component="footer" disableGutters sx={{ py: "10px" }}>
            <Grid container columnSpacing={2} sx={{ alignItems: "center" }}>
                <Grid item md={5}>
                    <Subscribe />
                </Grid>
                <Grid item md={7}>
                    <Copyright />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Footer;