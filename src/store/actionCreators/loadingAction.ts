import { LoadingTypes } from "../types";

const loadingAction = (value: boolean): LoadingTypes => {
    return {
        type: "LOADING",
        loading: value,
    };
};

export default loadingAction;
