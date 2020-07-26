import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {authService} from '@/api';

export const PrivateRoute = ({
  component: Component,
  ...rest
}: RouteProps) => {

  if (!Component) return null;

  return (
    <Route {...rest} render={(props) => {
      if (authService.isAuthenticated()) {
        return <Component {...props} />
      } else {
        return <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }} />
      }
    }} />
  );
};
