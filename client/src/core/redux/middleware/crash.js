/**
 * @function crashReporterMiddleware
 * @desc Catch errors in action and send them to crash analytics
 * @public
 * @version 1.0
 * @since 1.0
 * @todo send exception to crash analytics
 * @param {object} store redux store object
 * @returns {action} method
 * @property {action} - return the dispatch action from redux
 */
export default function crashReporterMiddleware({ getState }) {
    return (next) => (action) => {
        try {
            return next(action);
        } catch (err) {
            console.error('Caught an exception!', err, getState());
            // TODO: send exception to crash analytics
            throw err;
        }
    };
}
