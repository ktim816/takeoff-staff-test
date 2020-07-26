import React, {Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

import {
  Layout,
} from 'antd';

import {
  Header,
  PrivateRoute,
} from '@/components';

import {
  Welcome,
  Signup,
  Login,
  Contacts,
} from '@/routes';

const {Content} = Layout;

const contentStyles = {
  maxWidth: 380,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 30,
};

const App: React.FC = () => {

  return (
    <>
      <Header />
      <Content style={contentStyles}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/contacts" component={Contacts} />
          </Switch>
        </Suspense>
      </Content>
    </>
  );
};

export default App;
