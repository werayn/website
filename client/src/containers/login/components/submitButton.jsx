import React from 'react';
import { Form, Icon, Button } from 'antd';

const SubmitButton = () => {
    return (
        <Form.Item style={ { display: 'inline-block', verticalAlign: 'middle' } }>
            <Button
                id="submitButton"
                type="primary"
                htmlType="submit"
                className="login-form-button"
            >
                {'Connexion'}
                <Icon type="login" style={ { fontSize: 13 } } />
            </Button>
        </Form.Item>
    );
};

export { SubmitButton };
