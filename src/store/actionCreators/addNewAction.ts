import { AddNewTypes, AddNewObjectTypes } from "../types";

const addNewAction = (value: AddNewObjectTypes): AddNewTypes => {
    return {
        type: "ADD_NEW",
        content: value,
    };
};

export default addNewAction;
