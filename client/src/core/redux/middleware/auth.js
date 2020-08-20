//Lib
import HttpError from 'standard-http-error';
//Utils
import { isDev } from '../../utils/env';
import oneOfType from '../../utils/oneOfType';
// Selector / Actions
import authTypes from '../Auth/constants';
import * as AuthActions from '../Auth/actions';
import * as MeActions from '../Me/actions';
//import * as AuthSelector from '../Auth/selector';
/**
 * @constant actionTypesToIgnore - action type
 * @desc every type action to ignore
 * @version 1.0
 * @since 1.0
 * @private
 */
const actionTypesToIgnore = [
    'AUTH',
];
/**
 * @function containsAny - check action type
 * @desc Handle ignored type action
 * @public
 * @version 1.0
 * @since 1.0
 * @public
 * @param {string} str - the actual action type
 * @param {object} items - list of ignored type action
 * @returns {boolean} true / false
 */
function containsAny(str, items) {
    // eslint-disable-next-line no-unused-vars
    for (const i in items) {
        if (Object.prototype.hasOwnProperty.call(items, i)) {
            const item = items[i];
            if (str.indexOf(item) > -1) {
                return true;
            }
        }

    }
    return false;
}
/**
 * @function authMiddleware
 * @desc Handle auth error and refresh token
 * @public
 * @version 1.0
 * @since 1.0
 * @public
 * @param {object} store redux store object
 * @returns {action} method
 * @property {action} - return the dispatch action from redux
 */
export default function authMiddleware(store) {
    return (next) => (action) => {
        const dispatch = store.dispatch;

        //const state = store.getState();

        // Logout user if refresh failed
        if (oneOfType(action.type, [authTypes.REFRESH_REJECTED])) {
            dispatch(MeActions.postMeLogout());
        } else if (action.payload instanceof HttpError) {
            // Refresh token if server response is UNAUTHORIZED
            // Only for 401 that are not authentication
            if (action.payload.code === HttpError.UNAUTHORIZED &&
                !containsAny(action.type, actionTypesToIgnore)
            ) {
                Promise.resolve(dispatch(AuthActions.postAuthRefresh())).then(() => {
                    next(action);
                }, (err) => {
                    if (isDev()) {
                        console.log('Received 401, auto token refresh error: ', err);
                    }
                    dispatch(MeActions.postMeLogout());
                });
            }
        }/* else if (state) {
            // Refresh token if this one is expired and there is no other auth request pending
            const isPending = AuthSelector.getIsPending(state);

            if (!isPending &&
                !containsAny(action.type, actionTypesToIgnore)
            ) {
                Promise.resolve(dispatch(AuthActions.postAuthRefresh())).then(() => {
                    next(action);
                }, (err) => {
                    if (isDev()) {
                        console.log('Token is expired, auto token refresh error: ', err);
                    }
                    dispatch(MeActions.postMeLogout());
                });
            }
        }*/

        return next(action);
    };
}
