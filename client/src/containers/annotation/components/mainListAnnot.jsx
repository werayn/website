/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/display-name */
/* eslint-disable import/namespace */
import React from 'react';
import { Table, Radio, Divider, Col } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import getSchema from './table-schema.jsx';
import _ from 'lodash';
// Actions
import * as MeActions from '../../../core/redux/Me/actions.js';
import * as RecordActions from '../../../core/redux/record/actions.js';
import * as RecordSelector from '../../../core/redux/record/selector.js';

class MainListAnnot extends React.Component {
    /**
     * propTypes - define props
     * @desc define props required or not
     * @version 1.0
     * @since 1.0
     * @private
     */
    static propTypes = {
        listLetter: PropTypes.array.isRequired,
        setToAnnot: PropTypes.func.isRequired,
        getRecordList: PropTypes.func.isRequired,
        toAnnot: PropTypes.bool.isRequired,
        setCurrentLetter: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            listLetter: props.listLetter,
            toAnnot: props.toAnnot,
            searchText: '',
            tableSchema: getSchema(this),
        };
        this.handleChangeAnnotState = this.handleChangeAnnotState.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const keys = [
            'listLetter',
            'toAnnot',
        ];

        const mutableProps = _.pick(nextProps, keys);
        const stateToCompare = _.pick(prevState, keys);

        if (!_.isEqual(mutableProps, stateToCompare)) {
            return mutableProps;
        }
        return null;
    }

    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    }

      handleReset = clearFilters => () => {
          clearFilters();
          this.setState({ searchText: '' });
      }

      handleChangeAnnotState(e) {
          const { toAnnot } = this.state;
          this.props.setToAnnot();
          this.props.getRecordList(!toAnnot);
      }


      handleRowClick(record) {
          this.props.setCurrentLetter(record);
      }

      render() {
          const { listLetter, toAnnot, tableSchema } = this.state;

          return (
              <Col span={ 16 } offset={ 4 }>
                  <div style={ { textAlign: 'center' } }>
                      <Radio.Group
                          style={ { margin: '14px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '0 10px'} }
                          onChange={ this.handleChangeAnnotState }
                          value={ toAnnot === true ? 'toAnnot' : 'Annot' }
                          buttonStyle="solid"
                      >
                          <Radio.Button value="toAnnot" style={ {flex: '1', minWidth: '120px', maxWidth: '150px'} }>
                              {'Pas annoté'}
                          </Radio.Button>
                          <Divider type="vertical" style={ { backgroundColor: 'black' } } />
                          <Radio.Button value="Annot" style={ {flex: '1', minWidth: '120px', maxWidth: '150px'} }>
                              {'Déja annoté'}
                          </Radio.Button>
                      </Radio.Group>
                      <Table
                          size="small"
                          // eslint-disable-next-line react/jsx-no-bind
                          rowKey={ record => record.folderName }
                          style={ { backgroundColor: '#FFFFFF' } }
                          pagination={ {pageSize: 18 } }
                          dataSource={ listLetter }
                          columns={ tableSchema }
                          onRow={ (record, rowIndex) => {
                              return {
                                  onClick: _.partial(this.handleRowClick, record),
                              };
                          } }
                      />
                  </div>
              </Col>
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
    return bindActionCreators({ ...MeActions, ...RecordActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainListAnnot));
