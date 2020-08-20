import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';

const SelectQcm = (props) => {
    return (
        <div className="centered" style={ {marginTop: '5%'} }>
            <Button onClick={ _.partial(props.onHandleQcm, 'SC') } block style={ { width: '60%', marginBottom: 20, marginLeft: '20%',backgroundColor: '#c44569', borderColor: '#c44569' } } shape="round">
                {'Société cible'}
            </Button>
            <Button onClick={ _.partial(props.onHandleQcm, 'I') } block style={ { width: '60%', marginBottom: 20, marginLeft: '20%',backgroundColor: '#16a085', borderColor: '#16a085' } } shape="round">
                {'Investisseurs'}
            </Button>
            <Button onClick={ _.partial(props.onHandleQcm, 'O') } block style={ { width: '60%', marginBottom: 20, marginLeft: '20%',backgroundColor: '#f3a683', borderColor: '#f3a683' } } shape="round">
                {'Opération'}
            </Button>
        </div>
    );
};

SelectQcm.propTypes = {
    onHandleQcm: PropTypes.func.isRequired,
};

export { SelectQcm };
