import { STATE_KEY as USER_ME_STATE_KEY } from './reducer';

/**
 * @function getId
 * @desc Get current user id
 * @returns {string} user
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getId = ({ [USER_ME_STATE_KEY]: me  }) => me.get('userId');

export const getScope = ({ [USER_ME_STATE_KEY]: me  }) => me.get('scope');

/**
 * @function getName
 * @desc Get all normalized users
 * @returns {object} immutable object
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getName = ({ [USER_ME_STATE_KEY]: me  }) => me.get('username');

/**
 * @function getLetterDone
 * @description Get request Letter done by user
 * @returns {boolean}
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getDocDone = ({ [USER_ME_STATE_KEY]: me }) => me.get('doc_done');

/**
 * @function getIsPending
 * @desc Get request status
 * @returns {object} immutable object
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getIsPending = ({ [USER_ME_STATE_KEY]: me }) => me.get('isPending');

/**
 * @function getError
 * @description Get request error
 * @returns {boolean}
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getError = ({ [USER_ME_STATE_KEY]: me }) => me.get('error');
