import React from 'react';
import ReactDOM from 'react-dom';
import {
    applyMiddleware,
    compose,
    createStore
} from "redux";
import { Provider } from 'react-redux'
import { rootReducer } from "./redux/rootReducer";
import thunk from 'redux-thunk'

import App from './App';

import './index.scss';




const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

