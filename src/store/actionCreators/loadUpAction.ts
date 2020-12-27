import { LoadUpTypes } from "../types";

const loadUpAction = (): LoadUpTypes => {
    return {
        type: "LOAD_UP",
    };
};

export default loadUpAction;
