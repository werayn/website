import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class NavBarBrand extends React.Component {

    static propTypes = {
        handleBurger : PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="navbar-brand">
                <a className="navbar-item " href="/">
                    <img src={ require('assets/brand-icon.png') } alt="img-brand" />
                    <strong className="navbar-item is-tagline has-text-white">
                        {'Junique Virgile'}
                    </strong>
                </a>
                <span
                    className="navbar-burger burger is-grey"
                    data-target="navMenu"
                    onClick={ _.partial(this.props.handleBurger) }
                >
                    <span />
                    <span />
                    <span />
                    <span />
                </span>
            </div>
        );
    }
}

export { NavBarBrand };
