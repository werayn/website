import { STATE_KEY as AUTH_STATE_KEY } from './reducer';

/**
 * @function getToken
 * @desc Get token object
 * @returns {number} timestamp
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getToken = ({ [AUTH_STATE_KEY]: auth }) => auth.get('token');

/**
 * @function getIsConnected
 * @desc Get status of auth request
 * @returns {boolean}
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getIsConnected = ({ [AUTH_STATE_KEY]: auth }) => auth.get('isConnected');

/**
 * @function getIsPending
 * @desc Get status of auth request
 * @returns {boolean}
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getIsPending = ({ [AUTH_STATE_KEY]: auth }) => auth.get('isPending');

/**
 * @function getError
 * @description Get request error
 * @returns {boolean}
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getError = ({ [AUTH_STATE_KEY]: auth }) => auth.get('error');
