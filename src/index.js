import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {
    applyMiddleware,
    compose,
    createStore
} from "redux";
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(
        saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

