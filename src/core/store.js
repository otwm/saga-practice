import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducers";
import contentSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(contentSaga)
    return store;
}