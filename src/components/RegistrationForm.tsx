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

import {
  validatePassword
} from '@/helpers';

const {Text} = Typography;

const initialFormState = {
  remember: false,
};

export const RegistrationForm: React.FC = () => {

  const [form] = Form.useForm();
  const history = useHistory();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleFinish({email, password}: any) {
    setIsLoading(true);
    try {
      await authService.signUp(email, password);
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
        name="register"
        className="form"
        initialValues={initialFormState}
        onFinish={handleFinish}
        scrollToFirstError
      >
        <EmailInput />
        <PasswordInput
          hasFeedback
        />
        <PasswordInput
          name="confirm"
          dependencies={['password']}
          rules={[{
            required: true,
            message: 'Please confirm your password',
          },
          validatePassword(form, 'password')
          ]}
          placeholder="Confirm password"
          hasFeedback
        />
        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            loading={isLoading}
            style={{width: '100%'}}
          >
            Sign up
          </Button>
          <Text>
            Or <Link to="/login">login!</Link>
          </Text>
        </Form.Item>
      </Form>
    </>
  );
};
