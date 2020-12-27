import { PostDataTypes } from "../types";

const postDataAction = (value: any): PostDataTypes => {
    return {
        type: "POST_DATA",
        postData: value,
    };
};

export default postDataAction;
