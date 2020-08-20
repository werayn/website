import React from 'react';
import * as RecordActions from '../../../core/redux/record/actions.js';
import * as RecordSelector from '../../../core/redux/record/selector.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { SelectQcm } from './atomic-qcm/selectQcm.jsx';
import { HeaderMainQcm } from './atomic-qcm/headerMainQcm.jsx';
import SocieteCible from './societeCible.jsx';
import Investisseur from './investisseur.jsx';
import { SC } from '../../../mock/mock-societe-cible.js';
import { Invest } from '../../../mock/mock-invest.js';
import { Opera } from '../../../mock/mock-operation.js';
import Operation from './operations.jsx';
//import { openNotificationWithIcon } from '../../../components/notification/index.jsx';

class Qcm extends React.Component {
    /**
     * propTypes - define props
     * @desc define props required or not
     * @version 1.0
     * @since 1.0
     * @private
     */
    static propTypes = {
        toAnnot: PropTypes.bool.isRequired,
        getRecordList: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            highlight: [],
            key: null,
            toAnnot: props.toAnnot,
        };
        this.handleQuit = this.handleQuit.bind(this);
        this.handleSelectQcm = this.handleSelectQcm.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const keys = [
            'toAnnot',
        ];

        const mutableProps = _.pick(nextProps, keys);
        const stateToCompare = _.pick(prevState, keys);

        if (!_.isEqual(mutableProps, stateToCompare)) {
            return mutableProps;
        }
        return null;
    }

    handleQuit() {
        const {toAnnot} = this.state;
        this.props.getRecordList(toAnnot);
    }

    handleBack() {
        this.setState({
            key: null,
        });
    }

    handleSelectQcm(key) {
        this.setState({
            key: key,
        });
    }

    getQcm(key) {
        if (key === 'SC') {
            return (
                <SocieteCible onHandleBack={ this.handleBack } mock={ SC } />
            );
        } else if (key === 'I') {
            return (
                <Investisseur onHandleBack={ this.handleBack } mock={ Invest } />
            );
        } else if (key === 'O') {
            return (
                <Operation onHandleBack={ this.handleBack } mock={ Opera } />
            );
        }
    }

    render() {
        const { key } = this.state;
        const mainMenu = (
            <div
                style={ {
                    width: '50vw',
                    overflow: 'auto',
                    position: 'relative',
                } }
            >
                <HeaderMainQcm onHandleQuit={ this.handleQuit } />
                <SelectQcm onHandleQcm={ this.handleSelectQcm } />
            </div>
        );
        return key ? this.getQcm(key) : mainMenu;
    }
}


function mapStateToProps(state) {
    return {
        toAnnot: RecordSelector.getToAnnot(state),
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
    return bindActionCreators({ ...RecordActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Qcm));
