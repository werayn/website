import { Iterable } from 'immutable';

/**
 * @function transfomImmutable
 * @desc transform redux state into immutable object
 * @returns {object} redux state
 * @public
 * @version 1.0
 * @since 1.0
 */
export default function transformImmutable(state) {
    const newState = {};

    // eslint-disable-next-line no-unused-vars
    for (const i of Object.keys(state)) {
        if (Iterable.isIterable(state[i])) {
            newState[i] = state[i].toJS();
        } else {
            newState[i] = state[i];
        }
    }
    return newState;
}
