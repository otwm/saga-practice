import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducers";
import contentSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        compose(applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
    sagaMiddleware.run(contentSaga)
    return store;
}