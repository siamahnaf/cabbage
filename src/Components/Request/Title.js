import { Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/Request/Title.styles";

const Title = () => {
    return (
        <Box sx={styles.Title}>
            <Typography variant="h5" component="h5">
                Request a Content
            </Typography>
        </Box>
    );
};
export default Title;