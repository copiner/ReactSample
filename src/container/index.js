import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { routesList } from '../routes/index';

import PrivateRoute from '../routes/privateRoute';
import Toast from '../component/toast';
/*Layout s */
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const iconEnum = {
  '1':<MailOutlined />,
  '2':<UploadOutlined />,
  '3':<VideoCameraOutlined />,
  '4':<UserOutlined />
}
/*Layout e */

import la from './index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.toast = React.createRef();
    this.state = {
      collapsed: false,
      current:1
    }
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {

    let trigger;

    if(this.state.collapsed){
     trigger = <MenuUnfoldOutlined className={la.trigger} onClick={this.toggle} />
    } else {
     trigger = <MenuFoldOutlined className={la.trigger} onClick={this.toggle}/>
    }

    return (
      <>
        <Layout>
         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={la.logo} />
          <Menu theme="dark" mode="inline" defaultOpenKeys={['0','1','2']}  onClick={this.handleClick} >
             {
                routesList.map((item, i) => {
                    return item.routes.length > 0 ? (
                        <SubMenu key={i} icon={iconEnum[i+1]} title={<span>{item.title}</span>}>
                          {
                            item.routes.map((link,idx)=>{
                              return (
                                <Menu.Item key={idx+''+i}><Link to={link.path}>{link.title}</Link></Menu.Item>
                              )
                            })
                          }
                        </SubMenu>
                      ) : ""
                  })
              }
          </Menu>
         </Sider>
         <Layout className={la.layout}>
           <Header className={la.layoutBg}>
            {trigger}
            <Toast ref={this.toast} />
           </Header>
           <Content className={la.layoutContent}>
            <Switch>
              {
                routesList.map((item, i) => {

                    return item.routes.length > 0 ? (
                        item.routes.map((route,index)=>{
                          return (
                              <PrivateRoute
                                key={i + '' + index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                                routes = {route.routes}
                              />
                            )

                        })
                      ) : ''

                  })
                }
              <Redirect to="/login" />
            </Switch>
           </Content>
         </Layout>
       </Layout>
     </>
    )
  }

  componentDidMount(){
    window.Toast = this.toast.current;
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
// export default App;
