import {createAction} from "redux-actions";

export const GET_CONTENTS = "GET_CONTENTS";
export const getContents = createAction(GET_CONTENTS);

export const FETCH_REQUESTED = "FETCH_REQUESTED";
export const requestContent = createAction(FETCH_REQUESTED);