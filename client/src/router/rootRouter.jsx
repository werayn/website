//Lib
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter , Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  ConnectedSwitch  from './component/connected.jsx';
//Containers
import { WrappedLogin } from '../containers/login/index.jsx';
import  Dashboard  from '../containers/dashboard/index.jsx';
import NavBar from '../containers/navbar/index.jsx';
//Selector
import * as AuthSelector from '../core/redux/Auth/selector.js';
import * as MeActions from '../core/redux/Me/actions.js';
//Component
import { Layout } from 'antd';
import MainAnnotation from '../containers/annotation/index.jsx';

/**
 * RootRouter component
 * @class RootRouter
 * @reactProps {bool} isConnected - user is connected or not
 * @desc Entry point of the main router to dispatch route with reactRouter
 * @extends {React.Component}
 * @public
 * @version 1.0
 * @since 1.0
 */
class RootRouter extends React.Component {
    /**
     * propTypes - define props
     * @desc define props required or not
     * @version 1.0
     * @since 1.0
     * @private
     */
    static propTypes = {
        isConnected: PropTypes.bool.isRequired,
    };

    /**
    * constructor of rootRouter
    * @constructor rootRouter construct class
    * @desc build class and refresh me state
    * @param {object} props - propTypes value
    * @version 1.0
    * @since 1.0
    */
    constructor(props) {
        super(props);
        /**
     * @private
     * @constant state - component state
     * @desc react state component
     * @property {bool} isConnected - if user is connected or not
     * @version 1.0
     * @since 1.0
     */
        this.state = {
            isConnected: props.isConnected,
        };
    }


    /**
    * @private
    * @method getDerivedStateFromProps - react lifecycle method
    * @desc is invoked right before calling the render method, both on the initial mount and on subsequent updates
    * It should return an object to update the state, or null to update nothing.
    * @param {object} nextProps - new props updated
    * @param {object} prevState - last state value
    * @return {object} mutableProps
    * @version 1.0
    * @since 1.0
    */
    static getDerivedStateFromProps(nextProps, prevState) {
        const keys = [
            'isConnected',
        ];

        const mutableProps = _.pick(nextProps, keys);
        const stateToCompare = _.pick(prevState, keys);

        if (!_.isEqual(mutableProps, stateToCompare)) {
            return mutableProps;
        }

        return null;
    }

    /**
    * @method render - lifecycle method for render React Element (jsx)
    * @desc this render handle every route to correspond URL with every mounting component
    * @return {object} - React Element
    * @private
    * @version 1.0
    * @since 1.0
    */
    render() {
        const { isConnected } = this.state;
        if ( isConnected ) {
            return (
                <Layout style={ { minHeight: '100vh' } }>
                    <NavBar />
                    <ConnectedSwitch>
                        <Route exact path="/statistique" component={ Dashboard } />
                        <Route exact path="/annotation" component={ MainAnnotation } />
                        <Redirect from="/" to="/annotation" />
                    </ConnectedSwitch>
                </Layout>
            );
        } else {
            return (
                <Layout style={ { minHeight: '100vh' } }>
                    <Switch>
                        <Route path="/login" component={ WrappedLogin } />
                        <Redirect from="/" to="/login" />
                    </Switch>
                </Layout>
            );
        }
    }
}

/**
* @function mapStateToProps - redux method
* @desc transfert value state key into the props component
* @param {object} state - redux state
* @return {object} props
* @version 1.0
* @since 1.0
* @private
*/
function mapStateToProps(state) {
    return {
        isConnected: AuthSelector.getIsConnected(state),
    };
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
    return bindActionCreators({ ...MeActions }, dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RootRouter));
