import React, { Component } from 'react';

import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import la from './index.css'

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  linOut = e => {
    this.props.logoutSt()
  };

  correctOut = e => {
    this.props.logoutSt()
    this.props.correctMid()
  };

  render() {
    console.log(this.props)
    let { toggle, collapsed } = this.props;
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" onClick={this.correctOut}>修改密码</Menu.Item>
        <Menu.Item key="2" onClick={this.linOut} >退出</Menu.Item>
      </Menu>
    );

    return (
      <Layout.Header className={la.headerBg}>
         <span className={la.trigger} onClick={toggle}>
            { collapsed ? <MenuUnfoldOutlined/>: <MenuFoldOutlined/> }
         </span>
         <Dropdown
           overlay={menu}
           onVisibleChange={this.handleVisibleChange}
           visible={this.state.visible}
         >
           <a onClick={e => e.preventDefault()}>
             用户信息<DownOutlined />
           </a>
       </Dropdown>
      </Layout.Header>
    );
  }
}

export default Head;
