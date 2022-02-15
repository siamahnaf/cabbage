import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Team Member
import SiamAhnaf from "Assets/team-1.JPG";

//Styles
import styles from "Styles/Contact.js/Team.styles";

const Team = () => {
    return (
        <Box sx={{ mt: "30px" }}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: "700" }}>
                Team Members
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: "18px", mb: "30px" }}>
                Cabbage has not any contact info. You can contact any of our team members.
            </Typography>
            <Grid container spacing={3}>
                <Grid item md={2}>
                    <Box sx={{ borderRadius: "3px", width: "100%" }} component="img" src={SiamAhnaf} alt="Siam" />
                    <Typography variant="body1" component="p" sx={styles.Link}>
                        <Link href="https://www.siamahnaf.com/">
                            <a target="_blank">www.siamahnaf.com</a>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item md={10}>
                    <Box>
                        <Typography variant="h5" component="h5" sx={{ fontWeight: "700" }}>
                            Siam Ahnaf
                        </Typography>
                        <Typography variant="h6" component="h6">
                            Full-stack Developer
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: "18px" }}>
                            Siam Ahnaf is a full-stack developer. He is known for the javascript framework such as Reactjs, Nextjs, Nodejs, Expressjs, Graphql, and many headless CMS like Sanity and Strapi. He is also familiar with cloud services such as AWS, Azure, and Google Cloud. Siam Ahnaf now working on Code Station-21. He is one of our honorable members. He creates many videos and works with many others.
                        </Typography>
                        <Stack direction="row" sx={styles.Social}>
                            <Link href="https://www.facebook.com/siamahnaf198/">
                                <a target="_blank">
                                    <Icon icon="bx:bxl-facebook" />
                                </a>
                            </Link>
                            <Link href="https://twitter.com/siamahnaf198">
                                <a target="_blank">
                                    <Icon icon="akar-icons:twitter-fill" />
                                </a>
                            </Link>
                            <Link href="https://www.linkedin.com/in/siamahnaf198/">
                                <a target="_blank">
                                    <Icon icon="akar-icons:linkedin-v2-fill" />
                                </a>
                            </Link>
                            <Link href="https://github.com/siamahnaf198">
                                <a target="_blank">
                                    <Icon icon="ant-design:github-outlined" />
                                </a>
                            </Link>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Team;