import { isDev } from '../../utils/env';
import types from './constants.js';

/**
 * @function rejectPromiseWithGlobalError
 * @desc This function demonstrates how to handle a rejected
 * promise "globally" in the middleware.
 * @param {string} message the error message
 * @returns {object}
 * @version 1.0
 * @since 1.0
 * @public
 */
export function rejectPromiseWithGlobalError(message) {
    return (dispatch) => dispatch({
        type: types.GLOBAL_ERROR,
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(message));
            }, 1000);
        }),
    });
}

/**
 * @function throwLocalError
 * @desc This function demonstrates how to handle a rejected
 * promise locally in the action creator.
 * @param {string} message the error message
 * @returns {object} the promise
 * @version 1.0
 * @since 1.0
 * @public
 */
export function rejectPromiseWithLocalError(message) {
    return (dispatch) => dispatch({
        type: types.LOCAL_ERROR,
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(message));
            }, 1000);
        }),
    }).catch(error => {
        if (isDev()) {
            console.warn(
                `${types.LOCAL_ERROR} caught at action creator with reason: \
         ${JSON.stringify(error.message)}.`
            );
        }
    });
}
