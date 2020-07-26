import React from 'react';
import {Form, Input} from 'antd';

export const TextInput: React.FC<Props> = ({
  name,
  placeholder,
  required = true,
}) => {

  return (
    <Form.Item
      name={name}
      rules={[{
        required,
        message: `Please input your ${placeholder}!`,
      }]}
    >
      <Input
        size="large"
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

interface Props {
  name: string;
  placeholder: string;
  required?: boolean;
}
