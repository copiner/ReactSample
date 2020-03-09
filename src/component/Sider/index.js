import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class AppSider extends Component {
    constructor(props) {
        super(props);
	      console.log(props);
        this.state = {
          current: localStorage.getItem("menuKey")
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
        let siders = this.props.siders;
        //console.log(siders);
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu theme="light"
                      mode="inline"
                      onClick={this.handleClick}
                      defaultSelectedKeys={[this.state.current]} >
                      <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>交易管理</span></span>}>
                      {
                          siders.map((link, index) => {
                            return <Menu.Item key={index}><Link to={link.path}>{link.title}</Link></Menu.Item>
                          })
                      }
                    </SubMenu>
                    {/*

                      <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>交易管理</span></span>}>
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
