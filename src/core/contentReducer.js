import {handleActions} from "redux-actions";
import {getContents} from "./actions";

export const contentReducer = handleActions({
    [getContents]: (state, {payload}) => {
        return payload;
    }
}, {content: null});

export default contentReducer;