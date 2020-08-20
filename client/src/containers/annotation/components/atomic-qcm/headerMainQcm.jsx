import React from 'react';
import { Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const HeaderMainQcm = (props) => {
    return (
        <Row style={ {marginTop: '2%'} }>
            <Col span={ 4 }>
                <Button onClick={ props.onHandleQuit } type="danger" block style={ {marginLeft: '2%' } }>
                    {'Quitter'}
                </Button>
            </Col>
            <Col span={ 16 }>
                <h1 style={ {textAlign: 'center'} }>
                    {'Questionnaires'}
                </h1>
            </Col>
            <Col span={ 4 }>
                <Button disabled block style={ { marginRight: '2%',backgroundColor: '#4cd137', borderColor: '#4cd137' } }>
                    {'Valider'}
                </Button>
            </Col>
        </Row>

    );
};

HeaderMainQcm.propTypes = {
    onHandleQuit: PropTypes.func.isRequired,
};

export { HeaderMainQcm };
