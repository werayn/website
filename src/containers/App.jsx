import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import MainRouter from 'routes/';
// History API
import { history } from 'common/history';
// style
import 'styles/main.css';

/**
 * Main App component
 * @class App
 * @reactProps {none} none - none
 * @desc Entry point of the react app
 * @extends {React.Component}
 * @public
 * @version 1.0
 * @since 1.0
 */
class App extends Component {
    /**
     * @returns {Object} App
     * @property {Component} App - React main render
     */
    render() {
        return (
        // Provide our store to redux
            // Rehydration of the store with the localstorage
            // and we start our router with the every main route
        //          <Provider store={ store }>
            <Router history={ history }>
                <MainRouter />
            </Router>
        //        </Provider>
        );
    }
}

export { App };
