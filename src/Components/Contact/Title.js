import { Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/Contact.js/Title.styles";

const Title = () => {
    return (
        <Box sx={styles.Title}>
            <Typography variant="h5" component="h5">
                Contact Cabbage
            </Typography>
        </Box>
    );
};
export default Title;