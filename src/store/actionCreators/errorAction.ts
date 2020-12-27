import { ErrorTypes } from "../types";

const errorAction = (value: boolean): ErrorTypes => {
    return {
        type: "ERROR",
        error: value,
    };
};

export default errorAction;
