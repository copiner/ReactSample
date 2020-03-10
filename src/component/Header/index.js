import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MailOutlined,AppstoreOutlined,SettingOutlined } from '@ant-design/icons';

import { renderRoutes } from "react-router-config";

const { Header } = Layout;

import { hRoutes } from '../../routes/header'
import "./header.scss"

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: '1'
        };
    }

    handleClick = e => {
      // console.log('click ', e);
      this.setState({
        current: e.key,
      });
    };

    render() {
        return (
          <BrowserRouter>
              <div className="header">
                <div>
                  <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="1"><MailOutlined /><Link to="/">Root</Link></Menu.Item>
                    <Menu.Item key="2"><MailOutlined /><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="3"><MailOutlined /><Link to="/child/1">Child</Link></Menu.Item>
                    <Menu.Item key="4"><MailOutlined /><Link to="/child/2/grandchild">GrandChild</Link></Menu.Item>
                  </Menu>
                </div>
                <div className="address">
                  {
                    renderRoutes(hRoutes)
                  }
                </div>
              </div>
            </BrowserRouter>
        );
    }
}

export default AppHeader
