/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Layout, Row, Col, Spin, Card, Progress, Icon } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Selector
import * as DashSelector from '../../core/redux/dashboard/selector.js';
import * as DashActions from '../../core/redux/dashboard/actions.js';

const { Content } = Layout;
const antIcon = <Icon type="loading" style={ { fontSize: 24 } } spin />;

class Dashboard extends Component {
    static propTypes = {
        isPending: PropTypes.bool.isRequired,
        error: PropTypes.object,
        getStat: PropTypes.func.isRequired,
        stat: PropTypes.object,

    };
    /**
     * defaultProps - define default value props
     * @desc define not required props
     * @private
     * @version 1.0
     * @since 1.0
     */
    static defaultProps = {
        stat: null,
        error: null,
    };

    constructor(props) {
        super(props);
        //this.props.getStat();

        this.state = {
            error: props.error,
            isPending: props.isPending,
            stat: props.stat,
        };
        this.getPercent = this.getPercent.bind(this);
        this.calcRate = this.calcRate.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const keys = [
            'isPending',
            'error',
            'stat',
        ];

        const mutableProps = _.pick(nextProps, keys);
        const stateToCompare = _.pick(prevState, keys);

        if (!_.isEqual(mutableProps, stateToCompare)) {
            return mutableProps;
        }

        return null;
    }

    calcRate(nbKo, nbOk) {
        const ko = parseFloat(nbKo);
        const ok = parseFloat(nbOk);
        const sum = ko + ok;
        const ret = 100 * ok / sum;
        return Math.round(ret * 100) / 100;
    }


    getPercent(percent) {
        if (percent === 100) {
            return 'Done';
        } else {
            return `${percent}%`;
        }
    }

    render() {
        const { isPending, stat } = this.state;
        let ok = 0;
        let ko = 0;

        if (stat) {
            const mutableStat = stat.toJS();
            ok = mutableStat.global.annotated;
            ko = mutableStat.global.toannot;
        }
        return (
            <Content style={ { marginTop: '94px'} }>
                <Row>
                    <Spin spinning={ isPending } indicator={ antIcon }>
                        <Col xs={ { span: 5, offset: 1 } } lg={ { span: 6, offset: 2 } }>
                            <Card title={ 'Annotation total' } headStyle={ {textAlign: 'center', fontWeight:'bold'} }>
                                <b style={ {marginRight: '5%'} }>
                                    {`Annotées : ${ok}`}
                                    <br />
                                    {`A annoter: ${ko}`}
                                </b>
                                <Progress
                                    type="dashboard"
                                    percent={ this.calcRate(ko, ok) }
                                    format={ this.getPercent }
                                />
                            </Card>
                        </Col>
                    </Spin>
                </Row>
            </Content>
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
        stat: DashSelector.getStat(state),
        isPending: DashSelector.getIsPending(state),
        error: DashSelector.getError(state),
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
    return {
        dispatch,
        ...bindActionCreators({ ...DashActions}, dispatch),
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
