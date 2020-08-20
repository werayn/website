// Lib
import Network from '../network.js';

/**
 * @function postAuth
 * @desc Make a POST request for authentication
 * @param {string} username - user name
 * @param {string} password - user password

 * @returns {promise} Network promise with the response
 * @version 1.0
 * @since 1.0
 * @public
 */
export function postAuth(username, password) {
    return Network().post('/auth', {
        username,
        password,
    });
}

/**
 * @function postAuthRefresh
 * @desc Make a POST request for refreshToken
 * @param {string} userId - id of the user in DB
 * @param {string} deviceId - device id who is link to the user
 * @param {string} refreshToken - refresh token for regen access token
 * @returns {promise} Network promise with the response
 * @version 1.0
 * @since 1.0
 * @public
 */
export function postAuthRefresh(token) {
    return Network().post('/auth/refresh', {
        token,
    });
}
