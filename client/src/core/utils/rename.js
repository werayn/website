import _ from 'lodash';

/**
 * @function rename
 * @desc rename object passed as parameter
 * @param {object} everything the object who will be modified.
 * @param {index} key existing key
 * @param {index} NewIndew the new key
 * @returns {boolean}
 * @public
 * @version 1.0
 * @since 1.0
 */
export default function rename(obj, key, newKey) {

    if (_.includes(_.keys(obj), key)) {
        obj[newKey] = _.clone(obj[key], true);

        delete obj[key];
    }

    return obj;
}
