import initialState from "../initialState";
import { DataTypes } from "../types";

const dataReducer = (state = initialState.data, action: DataTypes) => {
    switch (action.type) {
        case "DATA":
            return action.data;
        default:
            return state;
    }
};

export default dataReducer;
