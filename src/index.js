import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'containers/App';
import * as serviceWorker from './serviceWorker';

/**
 * DOM component - setup main component into root div
 * @reactProps {none} none - none
 * @desc Entry point of the react app
 * @extends {ReactDOM}
 * @public
 * @version 1.0
 * @since 1.0
 */
/*eslint react/jsx-filename-extension: 0*/
ReactDOM.render((
    <App />
),
document.getElementById('root'));
serviceWorker.unregister();
