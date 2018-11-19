// Lib
import React from 'react';
// i18n
import { I18n } from 'i18n/index';
/**
 * 404 container
 * @class NoMatch
 * @reactProps {none} none - none
 * @desc Container for the 404Page when user url is not found
 * @extends {React.Component}
 * @public
 * @version 1.0
 * @since 1.0
 */
class NoMatch extends React.Component {

    /**
     * @method render - lifecycle method for render React Element (jsx)
     * @desc this render handle every component needed for the 404 page.
     * @return {object} - React Element
     * @private
     * @version 1.0
     * @since 1.0
     */
    render() {
        return (
            <div>
                <p>
                    { I18n.t('my404') }
                </p>
            </div>
        );
    }
}

export { NoMatch };
