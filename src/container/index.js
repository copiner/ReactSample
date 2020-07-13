import React, { Component } from 'react';
import { Switch, Route, Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Content } = Layout;

import PrivateRoute from '../routes/privateRoute';

import AppSider from '../component/sider';
import AppHeader from '../component/header';
import Toast from '../component/toast';

import { dRoutes } from '../routes/bus';
import { cRoutes } from '../routes/user';
import { aRoutes } from '../routes/home';
import { bRoutes } from '../routes/form';

class App extends Component {
    constructor(props) {
        super(props);
	       this.toast = React.createRef();
    }

    componentDidMount(){
      window.Toast = this.toast.current;
    }

    render() {
        const { fetchParams } = this.props;
        let allRoutes = [...aRoutes, ...bRoutes, ...cRoutes, ...dRoutes];

        return (
                  <Layout>
                    <Toast ref={this.toast} />{/*弹窗*/}
                    <AppHeader />
                    <Layout>
                      <AppSider aRoutes = { aRoutes } bRoutes = { bRoutes } cRoutes = { cRoutes } dRoutes = { dRoutes }/>
                      <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                          <Breadcrumb.Item>Home</Breadcrumb.Item>
                          <Breadcrumb.Item>List</Breadcrumb.Item>
                          <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 16, margin: 0, minHeight: 280 }}>
                          <Switch>
                            {
                              // allRoutes.map((item, index) => (
                              //   <Route
                              //     fetchParams={ fetchParams }
                              //     key = {index}
                              //     path={item.path}
                              //     exact={item.exact}
                              //     component={item.render}
                              //
                              //   />
                              // ))

                              // allRoutes.map((route, index) => (
                              //   <PrivateRoute
                              //     fetchParams={ fetchParams }
                              //     key={index}
                              //     path={route.path}
                              //     exact={route.exact}
                              //     component={route.render}
                              //   />
                              // ))

                              allRoutes.map((route, index) => {
                                return <PrivateRoute
                                  fetchParams={ fetchParams }
                                  key={index}
                                  path={route.path}
                                  exact={route.exact}
                                  component={route.render}
                                />
                              })
                            }
                            <Redirect to="/" />
                          </Switch>
                        </Content>
                      </Layout>
                  </Layout>
                </Layout>
        );
    }
}

const mapStateToProps  = (state) => ({
    // posts: state.posts
    // posts: state.posts.posts
});

const mapDispatchToProps = (dispatch) => ({
    fetchParams:(params) => dispatch(getParams(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



// class App extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//               <div>
//                   <Layout>
//                     <AppHeader />
//                     <Layout>
//                       <AppSider />
//                       <Layout style={{ padding: '0 24px 24px' }}>
//                         <Breadcrumb style={{ margin: '16px 0' }}>
//                           <Breadcrumb.Item>Home</Breadcrumb.Item>
//                           <Breadcrumb.Item>List</Breadcrumb.Item>
//                           <Breadcrumb.Item>App</Breadcrumb.Item>
//                         </Breadcrumb>
//                         <Content style={{ background: '#fff', padding: 16, margin: 0, minHeight: 280 }}>
//                           <Switch>
//                               <Route path="/" exact render={() => <h1>Home Page</h1>} />
//                               <Route path="/users" exact component={UserList}></Route>
//                               <Route path="/posts" exact component={PostList}></Route>
//                               <Route path="/page" exact render={() => <h1>路由测试</h1>}></Route>
//                               <Route path="/test" exact component={Test}></Route>
//                               <Redirect to="/" />
//                           </Switch>
//                         </Content>
//                       </Layout>
//                   </Layout>
//                 </Layout>
//               </div>
//         );
//     }
// }

//export default App;
