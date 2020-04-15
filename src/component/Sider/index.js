import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from "react-router";

import { Layout, Menu, Breadcrumb } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class AppSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: localStorage.getItem("menuKey"),
          num:3
        };
    }

    handleClick = e => {
      console.log('click ', e)
      localStorage.setItem("menuKey",e.key)
      this.setState({
        current: e.key,
      });
    };

    render() {
        let aRoutes = this.props.aRoutes,
            bRoutes = this.props.bRoutes,
            cRoutes = this.props.cRoutes,
            dRoutes = this.props.dRoutes;
        //console.log(siders);
        return (
            <Sider width={200} className="site-layout-background">
                <Menu mode="inline"
                      onClick={this.handleClick}
                      defaultSelectedKeys={[this.state.current]}
                      defaultOpenKeys={['sub1']} >
                      <SubMenu key="sub1" title={<span><MailOutlined /><span>交易查询</span></span>}>
                       {
                            aRoutes.map((link, index) => {
                              return <Menu.Item key={index}><Link to={link.path}>{link.title}</Link></Menu.Item>
                            })
                        }
                      </SubMenu>
                      <SubMenu key="sub2" title={<span><MailOutlined /><span>交易管理</span></span>}>
                        {
                            bRoutes.map((link, index) => {
                              return <Menu.Item key={index}><Link to={link.path}>{link.title}</Link></Menu.Item>
                            })
                        }
                      </SubMenu>
                      <SubMenu key="sub3" title={<span><MailOutlined /><span>报表管理</span></span>}>
                        {
                            cRoutes.map((link, index) => {
                              return <Menu.Item key={index}><Link to={link.path}>{link.title}</Link></Menu.Item>
                            })
                        }
                     </SubMenu>
                     <SubMenu key="sub4" title={<span><MailOutlined /><span>报表管理</span></span>}>
                       {
                           dRoutes.map((link, index) => {
                             return <Menu.Item key={index}><Link to={link.path}>{link.title}</Link></Menu.Item>
                           })
                       }
                    </SubMenu>
                     {/*

                      <SubMenu key="sub1" title={<span><MailOutlined /><span>交易管理</span></span>}>
                          <Menu.Item key="1"><Link to="/">交易查询</Link></Menu.Item>
                          <Menu.Item key="2"><Link to="/posts">交易退款</Link></Menu.Item>
                          <Menu.Item key="3"><Link to="/users">退款查询</Link></Menu.Item>
                          <Menu.Item key="4"><Link to="/hoc" >交易统计</Link></Menu.Item>
                      </SubMenu>

                    */}

                </Menu>
            </Sider>
        );
    }
}

export default withRouter(AppSider);
