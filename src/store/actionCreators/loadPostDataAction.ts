import { LoadPostDataTypes } from "../types";

const loadPostDataAction = (id: string): LoadPostDataTypes => {
    return {
        type: "LOAD_POST_DATA",
        id,
    };
};

export default loadPostDataAction;
