import { Box } from "@mui/material";

//Images
import Image from "Assets/about.jpg";

const Vector = () => {
    return (
        <Box>
            <Box sx={{ width: "100%", borderRadius: "3px" }} component="img" src={Image} alt="Vector" />
        </Box>
    );
};
export default Vector;