import { Container, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Navs from "Components/Header/Navs";
import Button from "Components/Header/Button";

const Header = ({ activePage }) => {
    return (
        <Container maxWidth={false} component="header" disableGutters sx={{ py: "5px" }}>
            <Grid container columnSpacing={2} sx={{ alignItems: "center" }}>
                <Grid item md={2}>
                    <Logo />
                </Grid>
                <Grid item md={8}>
                    <Navs activePage={activePage} />
                </Grid>
                <Grid item md={2}>
                    <Button />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Header;