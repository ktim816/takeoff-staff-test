import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {authService} from '@/api';

import {
  Alert,
  Typography,
  Form,
  Button,
} from 'antd';

import {
  EmailInput,
  PasswordInput,
} from '@/components';

const {Text} = Typography;

export const LoginForm: React.FC = () => {

  const [form] = Form.useForm();
  const history = useHistory();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleFinish({email, password}: any) {
    setIsLoading(true);
    try {
      await authService.logIn(email, password);
      setIsLoading(false);
      form.resetFields();
      history.push('/contacts');
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      form.resetFields();
    }
  };

  return (
    <>
      {error && (
        <Alert
          type="error"
          message={error}
          style={{marginBottom: 15}}
        />
      )}
      <Form
        form={form}
        name="login"
        className="form"
        onFinish={handleFinish}
        scrollToFirstError
      >
        <EmailInput />
        <PasswordInput />
        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            loading={isLoading}
            style={{width: '100%'}}
          >
            Log in
          </Button>
          <Text>
            Or <Link to="/signup">register now!</Link>
          </Text>
        </Form.Item>
      </Form>
    </>
  );
};
