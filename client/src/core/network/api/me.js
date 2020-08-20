// Lib
import Network from '../network.js';

/**
 * @function getMe
 * @desc Make a GET request to get current user
 * @param {string} accessToken - userToken
 * @returns {promise} Network promise with the response
 * @version 1.0
 * @since 1.0
 * @public
 */
export function getMe(username) {
    return Network().get('/user', {
        username,
    });
}

/**
 * @function postMeLogout
 * @desc Make a GET request for logout
 * @param {string} accessToken - userToken
 * @returns {promise} Network promise with the response
 * @version 1.0
 * @since 1.0
 * @todo request back to alert logout
 * @public
 */
export function postMeLogout(accessToken) {
    // return Network(accessToken).get('/logout');
    return new Promise((resolve) => {
        resolve();
    });
}
