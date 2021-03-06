import { Map } from 'immutable';

/**
 * @constant state auth state
 * @public
 * @version 1.0
 * @since 1.0
 */
export default Map({
    isPending: false,
    userId: null,
    username: null,
    doc_done: [],
    error: null,
});
