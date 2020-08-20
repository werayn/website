import * as ErrorActions from '../Error/actions.js';
import types from './constants.js';

/**
 * @function getListDocument
 * @desc This function send a get request to
 * get the letters statut and id.
 * @returns {object} the promise
 * @version 1.0
 * @since 1.0
 * @public
 */
export function getStat() {
    return (dispatch, _, { api }) => {
        return dispatch({
            type: types.DASHBOARD,
            payload: api.getStat(),
        }).catch((err) => {
            ErrorActions.rejectPromiseWithLocalError(err.message);
        });
    };
}

/**
 * @function clearError
 * @desc This function clear error object
 * @returns {object} the promise
 * @version 1.0
 * @since 1.0
 * @public
 */
export function clearError() {
    return (dispatch) => dispatch({
        type: types.CLEAR_ERROR,
    });
}

