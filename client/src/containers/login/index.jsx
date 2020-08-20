//Lib
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Icon, Input, Alert, Spin } from 'antd';
//Auth acction
import * as AuthActions from '../../core/redux/Auth/actions.js';
import * as AuthSelector from '../../core/redux/Auth/selector.js';
//Component
import { SubmitButton } from './components/submitButton.jsx';
import { LayoutLogin } from './components/layout.jsx';


class Login extends React.Component {
    /**
     * propTypes - define props
     * @desc define props required or not
     * @version 1.0
     * @since 1.0
     * @private
     */
    static propTypes = {
        isPending: PropTypes.bool.isRequired,
        postAuth: PropTypes.func.isRequired,
        error: PropTypes.object,
    };

    /**
     * defaultProps - define default value props
     * @desc define not required props
     * @private
     * @version 1.0
     * @since 1.0
     */
    static defaultProps = {
        error: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            error: props.error,
            isPending: props.isPending,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const { postAuth } = this.props;
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { userName, password } = values;
                postAuth(userName, password);
            }
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const keys = [
            'isPending',
            'error',
        ];

        const mutableProps = _.pick(nextProps, keys);
        const stateToCompare = _.pick(prevState, keys);

        if (!_.isEqual(mutableProps, stateToCompare)) {
            return mutableProps;
        }

        return null;
    }

    render () {
        // eslint-disable-next-line react/prop-types
        const { getFieldDecorator } = this.props.form;
        const { error, isPending } = this.state;

        return (
            <LayoutLogin>
                <Spin spinning={ isPending } delay={ 500 }>
                    <Form onSubmit={ this.handleSubmit } id="login">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Veuillez insérer votre nom d\'utilisateur' }],
                            })(
                                <Input
                                    prefix={ <Icon type="user" style={ { fontSize: 13 } } /> }
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Veuillez insérer votre mot de passe' }],
                                })(
                                    <Input
                                        prefix={ <Icon type="lock" style={ { fontSize: 13 } } /> }
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                )}
                        </Form.Item>
                        {
                            error &&
                                <Form.Item>
                                    <Alert type="error" message={ error.data ? error.data : "Nom d'utilisateur et/ou mot de passe incorrects, Veuillez réessayer." } />
                                </Form.Item>
                        }
                        <SubmitButton />
                    </Form>
                </Spin>
            </LayoutLogin>
        );
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
        isPending: AuthSelector.getIsPending(state),
        error: AuthSelector.getError(state),
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
    return bindActionCreators({ ...AuthActions }, dispatch);
}

const WrappedLogin = Form.create()(withRouter(connect(mapStateToProps, mapDispatchToProps)(Login)));

export { WrappedLogin };
