import {
    watchLoadAllPosts,
    watchLoadAddNew,
    watchLoadPostData,
} from "./postsSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([watchLoadAllPosts(), watchLoadAddNew(), watchLoadPostData()]);
}
