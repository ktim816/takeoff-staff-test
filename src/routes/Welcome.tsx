import React from 'react';
import {Link} from 'react-router-dom';
import {Typography} from 'antd';

const {Title, Text} = Typography;

export default () => {
  
  return (
    <>
      <Title>Welcome!</Title>
      <Text>
        please
        <Link to="/signup"> sign up </Link>
        or
        <Link to="/login"> login </Link>
        to get started
      </Text>
    </>
  );
};
