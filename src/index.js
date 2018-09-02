import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { homeReducer } from "./reducers/homeReducer.js";
import { errorHandleReducer } from "./reducers/errorHandleReducer.js";
import { loaderReducer } from "./reducers/isLoaderReducer.js";
import { searchReducer } from "./reducers/searchReducer.js";
import rootSaga from "./sagas/sagaFetchMovies";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    state: homeReducer,
    searchedMovies: searchReducer,
    error: errorHandleReducer,
    isLoader: loaderReducer
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDOM.render( 
<Provider store = { store } >
    <Router >
    <App / >
    </Router> 
</Provider>, document.getElementById('root'));

registerServiceWorker();