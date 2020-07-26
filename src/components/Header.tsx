import React, {useState} from 'react';
import {LogoutOutlined} from '@ant-design/icons';
import {NavLink, useLocation, useHistory} from 'react-router-dom';
import {authService} from '@/api';
import {navItems} from '@/data';

import {
  Layout,
  Button,
  Menu,
} from 'antd';

export const Header: React.FC = () => {

  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignOut() {
    setIsLoading(true);
    try {
      await authService.signOut();
      setIsLoading(false);
      history.push('/login');
    } catch (err) {
      setIsLoading(false);
      throw new Error(err);
    }
  }

  const renderNavItem = (item: any) => (
    <Menu.Item
      key={item.path}
      disabled={
        item.path === '/contacts' &&
        !authService.isAuthenticated()
      }
    >
      <NavLink to={item.path}>
        {item.name}
      </NavLink>
    </Menu.Item>
  );

  return (
    <Layout.Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
      >
        {navItems.map(renderNavItem)}
      </Menu>
      {authService.isAuthenticated() && (
        <Button
          size="large"
          type="primary"
          htmlType="button"
          icon={<LogoutOutlined />}
          loading={isLoading}
          onClick={handleSignOut}
        >
          Log out
        </Button>
      )}
    </Layout.Header>
  );
};
