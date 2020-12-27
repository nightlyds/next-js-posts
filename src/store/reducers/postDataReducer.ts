import initialState from "../initialState";
import { PostDataTypes } from "../types";

const postDataReducer = (
    state = initialState.postData,
    action: PostDataTypes
) => {
    switch (action.type) {
        case "POST_DATA":
            return action.postData;
        default:
            return state;
    }
};

export default postDataReducer;
