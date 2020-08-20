/**
 * @ignore
 */
function is(x, y) {
    // SameValue algorithm
    // Steps 1-5, 7-10
    if (x === y) {
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
    }

    // Step 6.a: NaN == NaN
    /* eslint no-self-compare: 0 */
    return x !== x && y !== y;
}

/**
 * @function oneOf
 * @desc Value checking modeled after React propType checking.
 * @returns {boolean}
 * @public
 * @version 1.0
 * @since 1.0
 */
export default function oneOf(actual, expected) {
    if (!Array.isArray(expected)) {
        return new Error(
            'Invalid argument supplied to oneOfType: expected an instance of array'
        );
    }

    if (expected.filter(value => is(actual, value)).length === 0) {
        return false;
    }

    return true;
}
