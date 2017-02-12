import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {GET_CONTENTS} from "./actions";

function* fetchContent() {
    try {
        const content = yield call(
            () => axios.get("http://codesanctum.net:4000/")
        );
        yield put({type: GET_CONTENTS, payload: content.data});
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

export default mySaga;
