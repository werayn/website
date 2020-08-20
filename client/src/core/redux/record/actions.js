/* eslint-disable camelcase */
import * as ErrorActions from '../Error/actions.js';
import types from './constants.js';
import * as RecordSelector from '../record/selector.js';

/**
 * @function getRecordList
 * @desc This function send a get request to
 * get the letters statut and id.
 * @returns {object} the promise
 * @version 1.0
 * @since 1.0
 * @public
 */
export function getRecordList(statut) {
    return (dispatch, getState, { api }) => {

        return dispatch({
            type: types.RECORD,
            payload: api.getRecordList(statut ? 0 : 1),
        }).catch((err) => {
            ErrorActions.rejectPromiseWithLocalError(err.message);
        });
    };
}

/**
 * @function setToAnnot
 * @desc This function send a get request to
 * get the letters statut and id.
 * @returns {object} the promise
 * @version 1.0
 * @since 1.0
 * @public
 */
export function setToAnnot() {
    return (dispatch, getState, { api }) => {
        const state = getState();
        const toAnnot = !RecordSelector.getToAnnot(state);

        return dispatch({
            type: types.ADD_TO,
            payload: { toAnnot },
        });
    };
}

/**
 * @function setCurrentLetter
 * @desc This function send a get request to
 * get the letters statut and id.
 * @returns {object} the promise
 * @version 1.0
 * @since 1.0
 * @public
 */
export function setCurrentLetter(letter) {
    return (dispatch, _, { api }) => {

        return dispatch({
            type: types.ADD_CURRENT_LETTER,
            payload: { letter },
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
