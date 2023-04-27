import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./signinSaga";
import loginReducer from "./signinReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(loginReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
