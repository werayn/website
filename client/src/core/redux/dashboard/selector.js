import { STATE_KEY as DASHBOARD_STATE_KEY } from './reducer';

/**
 * @function getdocs
 * @description Get request Letter done by document
 * @returns {boolean}
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getStat = ({ [DASHBOARD_STATE_KEY]: dash}) => dash.get('stat');

/**
 * @function getIsPending
 * @desc Get request status
 * @returns {object} immutable object
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getIsPending = ({ [DASHBOARD_STATE_KEY]: dash}) => dash.get('isPending');

/**
 * @function getError
 * @description Get request error
 * @returns {boolean}
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getError = ({ [DASHBOARD_STATE_KEY]: dash}) => dash.get('error');
