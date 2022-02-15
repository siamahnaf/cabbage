import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

//styles
import styles from "Styles/Footer/Subscribe.styles";

const Subscribe = () => {
    return (
        <Box sx={styles.SubscribeButton}>
            <Link href="https://www.youtube.com/channel/UCenJabtn62vOv0ZDMIWYYkQ">
                <a>
                    <ButtonBase component={Stack} direction="row" sx={{ alignItems: "center" }}>
                        <Icon icon="fontisto:youtube-play" />
                        <Typography variant="body1" component="p">
                            Subscribe
                        </Typography>
                    </ButtonBase>
                </a>
            </Link>
        </Box>
    );
};
export default Subscribe;