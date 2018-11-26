import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header } = Layout;

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: '1',
          username:"李笑笑"
        };
    }

    render() {
        return (
            <div className="header-menu">
              <Header className="header">
                <div className="logo" >惠民汇付</div>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.state.current]}
                    style={{ lineHeight: '64px' }} >
                      <Menu.Item key="1">首页</Menu.Item>
                      <Menu.Item key="2">交易中心</Menu.Item>
                      <Menu.Item key="3">账务中心</Menu.Item>
                      <Menu.Item key="4">管理中心</Menu.Item>
                      <SubMenu
                        style={{ float: 'right', minWidth:160 }}
                        title={<span><Icon type="user" />{this.state.username}</span>}>
                          <Menu.Item key="5">切换账号</Menu.Item>
                          <Menu.Item key="6">退出</Menu.Item>
                      </SubMenu>
                  </Menu>
                </Header>
            </div>
        );
    }
}

export default AppHeader
