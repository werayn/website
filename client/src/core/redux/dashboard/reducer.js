import types from './constants.js';
import initialState from './state.js';

/**
 * @constant key normalize key
 * @desc key for normalizr and immutable
 * @version 1.0
 * @since 1.0
 * @public
 */
export const STATE_KEY = 'dashboard';


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
    case types.DASHBOARD_PENDING:
        return state.merge({
            error: null,
            isPending: true,
        });

    case types.DASHBOARD_FULFILLED:
        return state.merge({
            isPending: false,
            error: null,
            stat: action.payload,
        });

    case types.DASHBOARD_REJECTED:
        return state.merge({
            isPending: false,
            error: action.payload,
            stat: null,
        });

    default:
        return state;
    }
}

