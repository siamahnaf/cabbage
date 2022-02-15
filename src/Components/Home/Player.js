import { useState } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import ReactPlayer from 'react-player/lazy';
import { Collapse } from 'react-collapse';

//Redux
import { useSelector } from "react-redux";

//Styles
import styles from "Styles/Home/Player.styles";

const Player = ({ current, videoList }) => {
    const [details, setDetails] = useState(false);
    const { error, message } = useSelector(state => state.getVideos);
    return (
        <Box sx={{ iframe: { borderRadius: "3px" } }}>
            {videoList?.length > 0 &&
                <>
                    <Box sx={styles.Player}>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${videoList[current].snippet.resourceId.videoId}`}
                            controls={true}
                            className="cabbage-player"
                            width="100%"
                            height="100%"
                            playing={true}
                            style={{
                                borderRadius: "10px"
                            }}
                        />
                    </Box>
                    <Typography variant="h5" component="h5" sx={{ py: "5px" }}>
                        {videoList[current].snippet.title}
                    </Typography>
                    <Box sx={{ textAlign: "right" }}>
                        <ButtonBase onClick={() => setDetails(!details)} sx={styles.ShowDescription}>
                            {details &&
                                <Typography ariant="body1" component="p">
                                    Hide Description
                                </Typography>
                            }
                            {!details &&
                                <Typography ariant="body1" component="p">
                                    Show Description
                                </Typography>
                            }
                        </ButtonBase>
                    </Box>
                    <Box sx={styles.Description}>
                        <Collapse isOpened={details}>
                            <Typography variant="body1" component="p">
                                {videoList[current].snippet.description}
                            </Typography>
                        </Collapse>
                    </Box>
                </>
            }
            {error &&
                <Typography variant="body1" component="p" sx={{ fontSize: "18px", color: "primary.youtube" }}>
                    {message}
                </Typography>
            }
        </Box >
    );
};
export default Player;