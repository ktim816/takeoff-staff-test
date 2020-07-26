import React from 'react';
import {Form, Input} from 'antd';
import {MailOutlined} from '@ant-design/icons';

export const EmailInput: React.FC<Props> = ({
  required = true,
  onChange
}) => {

  return (
    <Form.Item
      name="email"
      rules={[{
        type: 'email',
        message: 'The input is not valid E-mail!',
      }, {
        required,
        message: 'Please input your E-mail!',
      }]}
    >
      <Input
        size="large"
        prefix={<MailOutlined />}
        type="email"
        placeholder="Email"
        onChange={onChange}
      />
    </Form.Item>
  );
};

interface Props {
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
