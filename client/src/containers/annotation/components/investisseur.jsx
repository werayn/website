import React from 'react';
import _ from 'lodash';
import * as RecordActions from '../../../core/redux/record/actions.js';
import * as RecordSelector from '../../../core/redux/record/selector.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { HeaderMainQuest } from './atomic-qcm/headerMainQuest.jsx';
import { ListLevelZero } from './atomic-qcm/ListLevelZero.jsx';
import { Button } from 'antd';

class Investisseur extends React.Component {
    /**
     * propTypes - define props
     * @desc define props required or not
     * @version 1.0
     * @since 1.0
     * @private
     */
    static propTypes = {
        toAnnot: PropTypes.bool.isRequired,
        mock: PropTypes.object.isRequired,
        annotationList: PropTypes.object,
        getRecordList: PropTypes.func.isRequired,
        onHandleBack: PropTypes.func.isRequired,
    };

    /**
     * defaultProps - define default value props
     * @desc define not required props
     * @private
     * @version 1.0
     * @since 1.0
     */
    static defaultProps = {
        annotationList: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            mock: props.mock,
            annotationList: props.annotationList,
            key: null,
        };
        this.handleBackMenu = this.handleBackMenu.bind(this);
        this.handleGoQuestion = this.handleGoQuestion.bind(this);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const keys = [
            'annotationList',
            'toAnnot',
        ];

        const mutableProps = _.pick(nextProps, keys);
        const stateToCompare = _.pick(prevState, keys);

        if (!_.isEqual(mutableProps, stateToCompare)) {
            return mutableProps;
        }
        return null;
    }

    getQuestion(key) {
        return (
            <div>
                <Button onClick={ this.handleBackMenu }>
                    {'Retour'}
                </Button>
            </div>
        );
    }

    handleBackMenu() {
        this.setState({
            key: null,
        });
    }

    handleGoQuestion(item) {
        this.setState({
            key: item,
        });
    }

    render() {
        const { mock, key } = this.state;

        const Menu = (
            <div
                style={ {
                    width: '50vw',
                    overflow: 'auto',
                    position: 'relative',
                } }
            >
                <HeaderMainQuest onHandleBack={ this.props.onHandleBack } title="Investisseurs" />
                <ListLevelZero mock={ mock } onHandleGoQuestion={ this.handleGoQuestion } onHandleBackMenu={ this.handleBackMenu } />
            </div>
        );
        return key ? this.getQuestion(key) : Menu;
    }
}



function mapStateToProps(state) {
    return {
        toAnnot: RecordSelector.getToAnnot(state),
        annotationList: RecordSelector.getAnnotationList(state),
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Investisseur));
