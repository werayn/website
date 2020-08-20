import * as ErrorActions from '../Error/actions.js';
import * as AuthSelector from '../Auth/selector.js';
import * as MeSelector from '../Me/selector.js';

import types from './constants.js';

/**
 * @function getMe
 * @desc This function send a get request to
 * get the current user object.
 * @returns {object} the promise
 * @version 1.0
 * @since 1.0
 * @public
 */
export function getMe() {
    return (dispatch, getState, { api }) => {
        const state = getState();
        const username = MeSelector.getName(state) || Map({});

        return dispatch({
            type: types.ME,
            payload: api.getMe(username),
        }).catch((err) => {
            ErrorActions.rejectPromiseWithLocalError(err.message);
        });
    };
}

/**
 * @function getDocumentContent
 * @desc This function send a get request to
 * get the letters statut and id.
 * @returns {object} the promise
 * @version 1.0
 * @since 1.0
 * @public
 */
export function changeScope(scope) {
    return (dispatch, getState, { api }) => {
        return dispatch({
            type: types.CHANGE,
            payload: { scope },
        });
    };
}

/**
 * @function postMeLogout
 * @desc This function send a post request to
 * logout the user.
 * @returns {object} the promise
 * @version 1.0
 * @since 1.0
 * @public
 */
export function postMeLogout() {
    return (dispatch, getState, { api }) => {
        const state = getState();
        const accessToken = AuthSelector.getToken(state);

        return dispatch({
            type: types.LOGOUT,
            payload: api.postMeLogout(accessToken),
        }).catch((err) => {
            ErrorActions.rejectPromiseWithLocalError(err.message);
        });
    };
}
