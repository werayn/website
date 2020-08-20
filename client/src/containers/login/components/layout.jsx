import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Col, Row } from 'antd';

const LayoutLogin = (props) => {
    return (
        <Layout style={ {marginTop: '10%'} }>
            <Row>
                <Col span={ 8 } offset={ 8 }>
                    <div className="login-component-form">
                        <h1 style={ {color: 'white'} }>
                            { 'SISSE-IA' }
                        </h1>
                        { props.children }
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};

LayoutLogin.propTypes = {
    children: PropTypes.node.isRequired,
};

export { LayoutLogin };
