import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {FETCH_REQUESTED,getContents} from "./actions";

function* fetchContent() {
    try {
        const content = yield call(
            () => axios.get("http://codesanctum.net:4000/")
        );
        yield put(getContents(content.data));
    } catch (e) {
        yield put(getContents(e.toString()));
    }
}

/*
 Starts fetchContent on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
function* mySaga() {
    yield takeEvery(FETCH_REQUESTED, fetchContent);
}

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
// function* mySaga() {
//     yield takeLatest("USER_FETCH_REQUESTED", fetchContent);
// }

export default mySaga;
