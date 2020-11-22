import axios from 'axios';
import { nanoid } from 'nanoid';
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    generateDummyPost,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
} from '../reducers/post';

function addPostAPI(data) {
    return axios.post('/post', data)
}
function* addPost(action) {
    try {
        //  const result = yield call(addPostAPI,action.data);
        yield delay(1000);
        const id = nanoid();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data
            },
        });
    }
    catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        })
    }
}
function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data)
}
function* addComment(action) {
    try {
        //  const result = yield call(addCommentAPI,action.data);
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data,
        });
    }
    catch (err) {
        console.error(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        })
    }
}
function removePostAPI(data) {
    return axios.patch('/post', data)
}
function* removePost(action) {
    try {
        //  const result = yield call(removePostAPI,action.data);
        yield delay(1000);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });
    }
    catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        })
    }
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemovePost),
    ]);
}
