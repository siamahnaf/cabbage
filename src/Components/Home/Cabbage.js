import { Box, Typography } from "@mui/material";
import { Icon } from '@iconify/react';

//Logo
import Logo from "Assets/logo.png";

//Styles
import styles from "Styles/Home/Cabbage.styles";

const Cabbage = () => {
    return (
        <Box sx={{ textAlign: "center", mt: "36%" }}>
            <Box component="img" width="55%" src={Logo} alt="Log" />
            <Typography variant="body1" component="p" sx={{ fontSize: "20px", ml: "20px", mt: '5px' }}>
                The fearless programming
            </Typography>
            <Box sx={styles.Arrow}>
                <Icon className="a1" icon="bi:chevron-down" />
                <Icon className="a2" icon="bi:chevron-down" />
                <Icon className="a3" icon="bi:chevron-down" />
            </Box>
        </Box >
    );
};
export default Cabbage;