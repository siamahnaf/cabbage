import { Box } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Styles
import styles from "Styles/Header/Button.styles";

const Button = () => {
    return (
        <Box sx={{ textAlign: "right" }}>
            <Box sx={styles.YoutubeButton}>
                <Link href="https://www.youtube.com/channel/UCenJabtn62vOv0ZDMIWYYkQ">
                    <a>
                        <Icon icon="fontisto:youtube-play" />
                    </a>
                </Link>
            </Box>
        </Box>
    );
};
export default Button;