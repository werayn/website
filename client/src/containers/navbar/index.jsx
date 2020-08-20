//Lib
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
// Actions
import * as MeActions from '../../core/redux/Me/actions.js';
import { LayoutNavBar } from './component/layout.jsx';
import { Menu, Icon } from 'antd';

class NavBar extends React.Component {
    /**
     * propTypes - define props
     * @desc define props required or not
     * @version 1.0
     * @since 1.0
     * @private
     */
    static propTypes = {
        location: PropTypes.object.isRequired,
        postMeLogout: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
    };


    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleNav = this.handleNav.bind(this);
    }

    handleLogout() {
        const { postMeLogout } = this.props;

        postMeLogout();
    }



    handleNav(params) {
        this.props.push(params.key);
    }

    render() {
        const { pathname } = this.props.location;

        return (
            <LayoutNavBar>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={ [pathname] }
                    style={ { lineHeight: '64px' } }
                    onClick={ this.handleNav }
                >
                    <Menu.Item key="/annotation" keypath="/annotation">
                        <Icon type="check-circle" />
                        <span>
                            {'Annotation'}
                        </span>
                    </Menu.Item>
                    <Menu.Item key="/statistique" keypath="/statistique">
                        <Icon type="pie-chart" />
                        <span>
                            {'Statistique'}
                        </span>
                    </Menu.Item>
                    <Menu.Item key="/login" keypath="/login">
                        <Icon type="poweroff" />
                        <span onClick={ this.handleLogout }>
                            {'Déconnexion'}
                        </span>
                    </Menu.Item>
                </Menu>
            </LayoutNavBar>
        );
    }
}

/**
 * @function mapDispatchToProps - redux method
 * @desc make action available in the props component.
 * @param {object} dispatch - redux-thunk dispatcher
 * @return {object} MeActions & AnonymousAddressActions
 * @version 1.0
 * @since 1.0
 * @private
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...MeActions, push }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
