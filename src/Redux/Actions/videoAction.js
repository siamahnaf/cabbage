import axios from "axios";
import {
    GET_VIDEO_SUCCESS,
    GET_VIDEO_FAILED,
    GET_VIDEO_LOADING
} from "Redux/Constant/videoTypes";

export const getVideo = (page) => async (dispatch) => {
    dispatch({ type: GET_VIDEO_LOADING })
    await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${process.env.NEXT_PUBLIC_CHENNEL_ID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}&part=snippet&maxResults=8&${page ? `pageToken=${page}` : ""}`)
        .then(res => {
            dispatch({
                type: GET_VIDEO_SUCCESS,
                payload: {
                    videos: res.data.items,
                    nextPage: res.data.nextPageToken,
                    hasNextPage: res.data.nextPageToken ? true : false,
                    firstRender: page ? true : false
                }
            })
        })
        .catch(err => {
            dispatch({
                type: GET_VIDEO_FAILED,
                payload: {
                    message: err?.response?.data?.error?.message
                }
            })
        })
}
