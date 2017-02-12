import {combineReducers} from "redux";
import contentReducer from "./contentReducer";

const reducer = combineReducers({
    content: contentReducer
});

export default reducer;