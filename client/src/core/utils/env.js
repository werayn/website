/**
 * @function isDev
 * @desc Detect if the development environement is set
 * @returns {boolean}
 * @public
 * @version 1.0
 * @since 1.0
 */
function isDev() {
    return (process.env.NODE_ENV === 'development');
}

/**
 * @function isBrowser
 * @desc Detect if current device is a browser
 * @returns {boolean}
 * @public
 * @version 1.0
 * @since 1.0
 */
function isBrowser() {
    if (typeof window === 'undefined' && window.document === 'undefined') {
        return false;
    }
    return true;
}

export { isDev, isBrowser };
