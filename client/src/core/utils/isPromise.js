/**
 * @function isPromise
 * @desc Detect if the value is a promise
 * @param {object} value value can be anything
 * @returns {boolean}
 * @public
 * @version 1.0
 * @since 1.0
 */

export default function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value && typeof value.then === 'function';
    }

    return false;
}
