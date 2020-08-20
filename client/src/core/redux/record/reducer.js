import types from './constants.js';
import initialState from './state.js';

/**
 * @constant key normalize key
 * @desc key for normalizr and immutable
 * @version 1.0
 * @since 1.0
 * @public
 */
export const STATE_KEY = 'record';

/**
 * @function dataReducer redux reducer
 * @desc return new state according to the triggered action
 * @param {object} state redux state
 * @param {object} action action trigger
 * @return {object} state
 * @version 1.0
 * @since 1.0
 * @public
 */
export default function dataReducer(state = initialState, action) {
    switch (action.type) {
    case types.RECORD_PENDING:
        return state.merge({
            error: null,
            isPending: true,
        });

    case types.RECORD_FULFILLED:
        return state.merge({
            isPending: false,
            error: null,
            recordList: action.payload ? action.payload : null,
            currentLetter: null,
            annotationList: null,
        });

    case types.RECORD_REJECTED:
        return state.merge({
            isPending: false,
            error: action.payload,
            recordList: null,
        });

    case types.ADD_TO:
        return state.merge({
            isPending: false,
            error: null,
            toAnnot: action.payload.toAnnot,
        });

    case types.ADD_CURRENT_LETTER:
        return state.merge({
            isPending: false,
            error: null,
            currentLetter: action.payload.letter,
        });

    default:
        return state;
    }
}

