import { GET_VIDEO_SUCCESS, GET_VIDEO_LOADING, GET_VIDEO_FAILED } from "Redux/Constant/videoTypes";

export const getVideoReducers = (state = { videos: [], message: null, nextPage: null, hasNextPage: false, loading: false, firstRender: false, error: false }, action) => {
    switch (action.type) {
        case GET_VIDEO_LOADING:
            return {
                loading: true
            }
        case GET_VIDEO_SUCCESS:
            return {
                videos: action.payload.videos,
                nextPage: action.payload.nextPage,
                hasNextPage: action.payload.hasNextPage,
                loading: false,
                firstRender: action.payload.firstRender
            }
        case GET_VIDEO_FAILED:
            return {
                message: action.payload.message,
                loading: false,
                error: true
            }
        default:
            return state
    }
}