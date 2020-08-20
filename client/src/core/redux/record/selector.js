import { STATE_KEY as RECORD_STATE_KEY } from './reducer';

/**
 * @function getRecordList
 * @description Get ief list done by annotation statut
 * @returns {boolean}
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getRecordList = ({ [RECORD_STATE_KEY]: record}) => record.get('recordList');

/**
 * @function getIsPending
 * @desc Get request status
 * @returns {object} immutable object
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getIsPending = ({ [RECORD_STATE_KEY]: record}) => record.get('isPending');

/**
 * @function getError
 * @description Get request error
 * @returns {boolean}
 * @param {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export const getError = ({ [RECORD_STATE_KEY]: record}) => record.get('error');

export const getToAnnot = ({ [RECORD_STATE_KEY]: record}) => record.get('toAnnot');

export const getAnnotationList = ({ [RECORD_STATE_KEY]: record}) => record.get('annotationList');

export const getCurrentLetter = ({ [RECORD_STATE_KEY]: record}) => record.get('currentLetter');

export const getIef =  ({ [RECORD_STATE_KEY]: record}) => record.get('ief');
