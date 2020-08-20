import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Header } = Layout;

const LayoutNavBar = (props) => {
    return (
        <Header
            style={ { position: 'fixed', right: 0,
                left: 0, zIndex: 2, width: '100%' } }
        >
            <div className="menu-wrapper">
                <div className="logo">
                    <div className="logotext">
                        {'SISSE-IA'}
                    </div>
                </div>
                { props.children }
            </div>
        </Header>
    );
};

LayoutNavBar.propTypes = {
    children: PropTypes.node.isRequired,
};

export { LayoutNavBar };
