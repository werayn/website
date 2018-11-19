import { createBrowserHistory } from 'history';

/**
 * @function createBrowserHistory
 * @desc Custom item who can be import every where for navigate into the rooter with a specific url, cf: history API
 * @version 1.0
 * @since 1.0
 * @public
 * @returns {Object} history
 * @property {History} - Main class of the history API
 */
export const history = createBrowserHistory();
