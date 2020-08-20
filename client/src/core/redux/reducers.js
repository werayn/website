//Lib
import { combineReducers } from 'redux';
import { connectRouter, LOCATION_CHANGE } from 'connected-react-router';
//Constants
import MeTypes from './Me/constants.js';
// States
import auth, { STATE_KEY as AUTH_STATE_KEY } from './Auth/reducer.js';
import userMe, { STATE_KEY as USER_ME_STATE_KEY } from './Me/reducer';
import dashboard, { STATE_KEY as DASHBOARD_STATE_KEY } from './dashboard/reducer';
import record, { STATE_KEY as RECORD_STATE_KEY } from './record/reducer';
import initialStateRecord from './record/state.js';

// History
import { history } from '../utils/history.js';


/**
 * @constant appReducer every reducer used in redux
 * @desc combine every reducer into a big one
 * @private
 * @version 1.0
 * @since 1.0
 */
const appReducer = combineReducers({
    //States
    [AUTH_STATE_KEY]: auth,
    [USER_ME_STATE_KEY]: userMe,
    [DASHBOARD_STATE_KEY]: dashboard,
    [RECORD_STATE_KEY]: record,
    //Router
    router: connectRouter(history),
});

/**
 * @function rootReducer
 * @public
 * @version 1.0
 * @since 1.0
 * @desc generate root reducer for create store and clean store if logout
 * @param {object} state redux state
 * @param {object} action the action trigger
 * @return {object} rootReducer
 */
const rootReducer = (state, action) => {
    if (action.type === MeTypes.LOGOUT_FULFILLED) {
        state = undefined;
    }

    if (action.type === LOCATION_CHANGE) {
        if (action.payload.location.pathname.localeCompare('/statistique') === 0) {
            state.record = initialStateRecord;
        }
    }

    return appReducer(state, action);
};

export default rootReducer;
