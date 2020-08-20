/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import {
    PdfLoader,
    PdfHighlighter,
} from 'react-pdf-highlighter';
import buildUrl from 'build-url';
//Actions
import Config from '../../../core/config/index.js';
import * as RecordActions from '../../../core/redux/record/actions.js';
import * as RecordSelector from '../../../core/redux/record/selector.js';
import { openNotificationWithIcon } from '../../../components/notification/index.jsx';
import Qcm from './qcm.jsx';
import { Spinner } from '../../../components/spinner/index.jsx';

class MainNote extends React.Component {
    /**
     * propTypes - define props
     * @desc define props required or not
     * @version 1.0
     * @since 1.0
     * @private
     */
    static propTypes = {
        toAnnot: PropTypes.bool.isRequired,
        currentLetter: PropTypes.object.isRequired,
        ief: PropTypes.object,
        setCurrentLetter: PropTypes.func.isRequired,
        getRecordList: PropTypes.func.isRequired,
    };

    /**
     * defaultProps - define default value props
     * @desc define not required props
     * @private
     * @version 1.0
     * @since 1.0
     */
    static defaultProps = {
        ief: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            toAnnot: props.toAnnot,
            currentLetter: props.currentLetter,
            highlights: [],
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const keys = [
            'toAnnot',
            'currentLetter',
        ];

        const mutableProps = _.pick(nextProps, keys);
        const stateToCompare = _.pick(prevState, keys);

        if (!_.isEqual(mutableProps, stateToCompare)) {
            return mutableProps;
        }
        return null;
    }


    render() {
        const { currentLetter, highlights, toAnnot } = this.state;
        const url = buildUrl(`${Config.API_URL}/record/ief`, {queryParams: currentLetter});
        return (
            <div style={ { minHeight:'calc(100vh - 64px)', display:'flex',  maxHeight:'calc(100vh - 64px)', margin: '0', padding:'0px 12px 5px' } }>
                <div
                    style={ {
                        height: 'calc(100vh - 64px)',
                        width: '50vw',
                        position: 'relative',
                    } }
                >
                    <PdfLoader
                        url={ url } beforeLoad={ <Spinner /> }
                        onError={ error => {
                            openNotificationWithIcon('error', 'Erreur IEF manquant, veuillez notifier l\'administrateur du site');
                            this.props.getRecordList(toAnnot);
                            return;
                        } }
                    >
                        {
                            (pdfDocument, err) =>{
                                if (pdfDocument) {
                                    return (
                                        <PdfHighlighter
                                            pdfDocument={ pdfDocument }
                                            enableAreaSelection={ event => event.altKey }
                                            highlights={ highlights }
                                            scrollRef={ scrollTo => {
                                                console.log(scrollTo);
                                            } }
                                        />
                                    );
                                } else {
                                    return (
                                        <p>
                                            {'error loading pdf'}
                                        </p>
                                    );
                                }
                            }}
                    </PdfLoader>
                </div>
                <Qcm />
            </div>
        );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNote));
