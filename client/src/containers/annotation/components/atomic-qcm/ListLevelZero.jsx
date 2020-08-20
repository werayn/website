/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { RightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { List } from 'antd';

class ListLevelZero extends React.Component {
    /**
     * propTypes - define props
     * @desc define props required or not
     * @version 1.0
     * @since 1.0
     * @private
     */
    static propTypes = {
        mock: PropTypes.object.isRequired,
        onHandleGoQuestion: PropTypes.func.isRequired,
        onHandleBackMenu: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            mock: props.mock,
        };
    }

    handleQuestion(elem) {
        console.log(elem);
    }

    handleChangeBackground(e) {
        e.target.style.boxShadow = '2px 2px 8px #40a9ff';
    }

    handleResetBackground(e) {
        e.target.style.boxShadow = null;

    }

    render() {
        const { mock } = this.state;

        return (
            <List
                bordered
                style={ {marginLeft: '5%', marginRight: '5%'} }
                dataSource={ mock.children }
                renderItem={ item => (
                    <List.Item
                        onMouseOver={ this.handleChangeBackground }
                        onMouseLeave={ this.handleResetBackground }
                        onClick={ _.partial(this.props.onHandleGoQuestion, item) }
                        key={ item.key } actions={ [<RightOutlined onMouseLeave={ this.handleResetBackground } />] }
                    >
                        { `${item.content}  ` }
                        {
                            item.mandatory &&
                            <InfoCircleOutlined onMouseLeave={ this.handleResetBackground } />
                        }
                    </List.Item>
                ) }
            />
        );
    }
}

export { ListLevelZero };
