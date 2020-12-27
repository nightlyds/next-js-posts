import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import dataAction from "../actionCreators/dataAction";
import loadingAction from "../actionCreators/loadingAction";
import errorAction from "../actionCreators/errorAction";
import { AddNewTypes, AddNewObjectTypes, LoadPostDataTypes } from "../types";
import postDataAction from "../actionCreators/postDataAction";

export function apiCallLoadPost(url: string) {
    return axios.get(url);
}

export function* workerLoadAllPosts() {
    yield put(loadingAction(false));
    yield put(errorAction(false));
    try {
        const request = yield call(
            apiCallLoadPost,
            "https://simple-blog-api.crew.red/posts"
        );
        yield put(dataAction(request));
    } catch {
        yield put(errorAction(true));
    }
    yield put(loadingAction(true));
}

export function* watchLoadAllPosts() {
    yield takeEvery("LOAD_UP", workerLoadAllPosts);
}

export function apiCallAddNewPost(url: string, data: AddNewObjectTypes) {
    return axios.post(url, data);
}

export function* workerAddNew(action: AddNewTypes) {
    yield put(loadingAction(false));
    yield put(errorAction(false));
    try {
        yield call(
            apiCallAddNewPost,
            "https://simple-blog-api.crew.red/posts",
            action.content
        );
    } catch {
        yield put(errorAction(true));
    }
    yield put(loadingAction(true));
}

export function* watchLoadAddNew() {
    yield takeEvery("ADD_NEW", workerAddNew);
}

export function* workerLoadPostData(action: LoadPostDataTypes) {
    yield put(loadingAction(false));
    yield put(errorAction(false));
    try {
        const request = yield call(
            apiCallLoadPost,
            `https://simple-blog-api.crew.red/posts/${action.id}?_embed=comments`
        );
        yield put(postDataAction(request));
    } catch {
        yield put(errorAction(true));
    }
    yield put(loadingAction(true));
}

export function* watchLoadPostData() {
    yield takeEvery("LOAD_POST_DATA", workerLoadPostData);
}
