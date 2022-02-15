import { Box, Grid, Typography, ButtonBase, CircularProgress } from "@mui/material";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getVideo } from "Redux/Actions/videoAction";

//Styles
import styles from "Styles/Home/Videos.styles";

const Videos = ({ setCurrent, videoList }) => {
    const scrollTo = (id) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrent(id)
    };
    const { hasNextPage, loading, nextPage, error, message } = useSelector(state => state.getVideos);
    const dispatch = useDispatch();
    const loadMore = () => {
        dispatch(getVideo(nextPage))
    }
    return (
        <Box sx={{ mt: "20px" }}>
            <Grid container spacing={2}>
                {videoList?.length > 0 &&
                    videoList.map((video, i) => (
                        <Grid item md={3} key={i}>
                            <Box sx={styles.List} onClick={() => scrollTo(i)}>
                                <Box
                                    sx={{ width: "100%", height: "auto" }}
                                    component="img"
                                    src={video.snippet.thumbnails.medium.url}
                                    alt={video.id}
                                />
                                <Typography variant="h5" component="h5">
                                    {video.snippet.title}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            <Box sx={{ textAlign: "center", mt: "30px" }}>
                {hasNextPage && !loading && !error &&
                    <ButtonBase sx={styles.Buttons} onClick={loadMore}>
                        Load More
                    </ButtonBase>
                }
                {loading &&
                    <CircularProgress size={25} sx={{ color: "primary.main" }} />
                }
                {error &&
                    <Typography variant="body1" component="p" sx={{ fontSize: "18px", color: "primary.youtube" }}>
                        {message}
                    </Typography>
                }
            </Box>
        </Box >
    );
};
export default Videos;