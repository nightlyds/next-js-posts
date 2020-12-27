import { DataTypes } from "../types";

const dataAction = (value: any): DataTypes => {
    return {
        type: "DATA",
        data: value,
    };
};

export default dataAction;
