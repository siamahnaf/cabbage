import { Box, Grid, Typography, ListItem, List } from "@mui/material";
import Link from "next/link";

//Data
import ProjectsList from "Data/About/Projects.data";

//Styles
import styles from "Styles/About/Projects.styles";

const Projects = () => {
    return (
        <Box sx={{ mt: "30px" }}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 700 }}>
                Projects
            </Typography>
            <List sx={styles.List}>
                {ProjectsList &&
                    ProjectsList.map((project, i) => (
                        <ListItem key={i}>
                            <Grid container spacing={3}>
                                <Grid item msm={8} xxs={12}>
                                    <Typography variant="body1" component="p">
                                        {project.title}
                                    </Typography>
                                </Grid>
                                <Grid item msm={2} xxs={6}>
                                    <Typography variant="body1" component="p">
                                        {project.category}
                                    </Typography>
                                </Grid>
                                <Grid item msm={2} xxs={6}>
                                    <Typography variant="body1" component="p">
                                        <Link href={project.download}>
                                            <a>Download</a>
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};

export default Projects;