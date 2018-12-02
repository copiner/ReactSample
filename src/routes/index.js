import React from 'react';
import UserList from '../container/UserList';
import PostList from '../container/PostList';

import Hoc from '../component/Hoc';
import Acc from '../component/Account';
import AppForm from '../component/Form';

const Home = () =>{
    return  (
        <h1>Home</h1>
      );
};

const route = [{
  path: '/',
  exact: true,
  render: Home
}, {
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
},{
  path: '/hoc',
  exact: true,
  //container/index.js
  // component={(props) => {
  //   let obj = Object.assign({}, {fetchParams}, props)
  //   return <route.render {...obj}/>
  // }}
  render: Hoc
},{
  path: '/acc',
  exact: true,
  //container/index.js
  // component={(props) => {
  //   let obj = Object.assign({}, {fetchParams}, props)
  //   return <route.render {...obj}/>
  // }}
  render: Acc
},{
  path: '/login',
  exact: true,
  //container/index.js
  // component={(props) => {
  //   let obj = Object.assign({}, {fetchParams}, props)
  //   return <route.render {...obj}/>
  // }}
  render: props => < AppForm {...props} />
}];

export default route;
