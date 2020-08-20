// Lib
import Network from '../network.js';

/**
 * @function getDashboard
 * @desc Make a GET request to get current user
 * @param {string} accessToken - userToken
 * @returns {promise} Network promise with the response
 * @version 1.0
 * @since 1.0
 * @public
 */
export function getRecordList(statut) {
    return Network().get('/record/list', {
        statut,
    });
}

/**
 * @function getDashboard
 * @desc Make a GET request to get current user
 * @param {string} accessToken - userToken
 * @returns {promise} Network promise with the response
 * @version 1.0
 * @since 1.0
 * @public
 */
export function getCurrentLetterAnnotation(currentIef) {
    return Network().get('/record/get-annotation', {
        ...currentIef,
    });
}

/**
 * @function getDashboard
 * @desc Make a GET request to get current user
 * @param {string} accessToken - userToken
 * @returns {promise} Network promise with the response
 * @version 1.0
 * @since 1.0
 * @public
 */
export function deleteAnnotation(data) {
    return Network().post('/record/post-annotation', {
        ...data,
    });
}
