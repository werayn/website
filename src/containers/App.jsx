import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import MainRouter from './routes';

class App extends Component {
    render() {
        return (
        // Provide our store to redux
            // Rehydration of the store with the localstorage
            // and we start our router with the every main route
            <Provider store={ store }>
                <Router history={ history }>
                    <MainRouter />
                </Router>
            </Provider>
        );
    }
}

export { App };
