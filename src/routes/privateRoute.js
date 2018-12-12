//高阶组件，权限控制
import React from 'react';
import { Route,Redirect } from 'react-router-dom';

//登陆或者权限校验控制实现方法...
const fakeAuth = {
  isAuthenticated: false
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    return fakeAuth.isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/"
                }}
              />
            )
  }} />
);

export default PrivateRoute;
