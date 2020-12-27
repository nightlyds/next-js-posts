import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import postDataReducer from "./postDataReducer";

const reducers = combineReducers({
    dataReducer,
    loadingReducer,
    errorReducer,
    postDataReducer,
});

export default reducers;
