import React from 'react';
import { Button, Row } from 'antd';
import PropTypes from 'prop-types';

const HeaderMainQuest = (props) => {
    return (
        <Row>
            <Button onClick={ props.onHandleBack } type="primary" block style={ { width: '15%', marginTop: '2%', position: 'absolute', left: '0',marginLeft: '2%' } } shape="round">
                {'Retour'}
            </Button>
            <h1 style={ {textAlign: 'center', marginTop: '2%'} }>
                {props.title}
            </h1>
        </Row>
    );
};

HeaderMainQuest.propTypes = {
    onHandleBack: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export { HeaderMainQuest };
