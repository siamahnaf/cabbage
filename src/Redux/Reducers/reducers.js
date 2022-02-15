import { combineReducers } from "redux";

//Reducers
import { getVideoReducers } from "Redux/Reducers/videoReducers";

const reducer = combineReducers({
    getVideos: getVideoReducers
});

export default reducer;