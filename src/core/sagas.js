import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import GET_CONTENTS from "./actions";

function* fetchContent() {
    try {
        const content = yield call(
            () => axios.get("http://codesanctum.net:4000/")
        );
        // yield put({type: GET_CONTENTS, user: content.data});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

/*
 Starts fetchContent on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
function* mySaga() {
    yield takeEvery("FETCH_REQUESTED", fetchContent);
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
