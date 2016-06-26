import React, { Component } from 'react';
import GameContainer from './game/GameContainer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import playerReducer from './player/playerReducer';

var reducers = {
    player: playerReducer
};

var rootReducer = combineReducers(reducers);

const loggerMiddleware = createLogger();

var configureStore = function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};

export default class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <GameContainer/>
            </Provider>
        );
    }
}