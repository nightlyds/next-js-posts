import { all } from "redux-saga/effects";
import {
    watchLoadAllPosts,
    watchLoadAddNew,
    watchLoadPostData,
} from "./postsSaga";

export default function* rootSaga() {
    yield all([watchLoadAllPosts(), watchLoadAddNew(), watchLoadPostData()]);
}
