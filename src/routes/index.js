import React from 'react';
import UserList from '../container/UserList';
import PostList from '../container/PostList';

import Hoc from '../component/Hoc';
import Acc from '../component/Account';
import AppForm from '../component/Form';
import HForm from '../component/Account/form';
import Alert from '../component/Alert';

const Home = () =>{
    return  (
        <h1>Home</h1>
      );
};

export const comRoutes = [{
  path: '/',
  exact: true,
  render: Home
},{
  path: '/users',
  exact: true,
  //container/index.js
  //component={route.render}
  render: props => < UserList {...props} />
},{
  path: '/posts',
  exact: true,
  //container/index.js
  // component={(props) => {
  //   let obj = Object.assign({}, {fetchParams}, props)
  //   return <route.render {...obj}/>
  // }}
  render: props => < PostList {...props} />
}];

export const busRoutes = [{
  path: '/hoc',
  exact: true,
  render: Hoc
},{
  path: '/acc',
  exact: true,
  render: Acc
},{
  path: '/login',
  exact: true,
  render: props => < AppForm {...props} />
},{
  path: '/hform',
  exact: true,
  render: props => < HForm {...props} />
},{
  path: '/alert',
  exact: true,
  render: props => < Alert {...props} />
}];
