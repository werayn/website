import types from './constants';
import initialState from './state';

/**
 * @constant key normalize key
 * @desc key for normaliz and immutable
 * @version 1.0
 * @since 1.0
 * @public
 */
export const STATE_KEY = 'auth';

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
    case types.IDENTIFICATION_PENDING:
    case types.REFRESH_PENDING:
        return state.merge({
            error: null,
            isPending: true,
        });

    case types.IDENTIFICATION_FULFILLED:
        return state.merge({
            isPending: false,
            isConnected: true,
            error: null,
            token: action.payload.token,
        });

    case types.REFRESH_FULFILLED:
        return state.merge({
            isPending: false,
            isConnected: true,
            error: null,
            token: action.payload,
        });

    case types.IDENTIFICATION_REJECTED:
    case types.REFRESH_REJECTED:
        return state.merge({
            isPending: false,
            isConnected: false,
            error: action.payload,
        });

    case types.CLEAR_ERROR:
        return state.merge({
            error: null,
        });

    default:
        return state;
    }
}
