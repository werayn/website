//Lib
import { Map } from 'immutable';

/**
 * @constant state auth state
 * @public
 * @version 1.0
 * @since 1.0
 */
export default Map({
    //Auth state
    isConnected: false,
    isPending: false,
    error: null,
    token: null,
});
