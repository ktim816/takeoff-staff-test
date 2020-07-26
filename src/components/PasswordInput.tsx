import React from 'react';
import {Form, Input} from 'antd';
import {LockOutlined} from '@ant-design/icons';
import {Rule} from 'antd/lib/form';

const baseRules: Rule[] = [{
  required: true,
  message: 'Please input your Password!'
}, {
  min: 6,
  message: 'Password should be at least 6 characters'
}];

export const PasswordInput: React.FC<Props> = ({
  name = "password",
  rules = baseRules,
  placeholder = "Password",
  dependencies = [],
  hasFeedback,
}) => {

  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      rules={rules}
      hasFeedback={hasFeedback}
    >
      <Input.Password
        size="large"
        prefix={<LockOutlined />}
        type="password"
        placeholder={placeholder}
        autoComplete="new-password"
      />
    </Form.Item>
  );
};

interface Props {
  name?: string;
  rules?: Rule[];
  dependencies?: string[];
  placeholder?: string;
  hasFeedback?: boolean;
}
