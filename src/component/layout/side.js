import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import la from './index.css'

class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current:'0'
    }
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    let { routesList, collapsed } = this.props;

    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
         <div className={la.logo} >
           {collapsed ? "足":"杭州市足球协会联盟"}
         </div>
         <Menu theme="dark" mode="inline" defaultOpenKeys={['0','1','2']}  onClick={this.handleClick} >
            {
               routesList.map((item, i) => {
                   return item.routes.length > 0 ? (
                       <Menu.SubMenu key={i} icon={item.icon} title={<span>{item.title}</span>}>
                         {
                           item.routes.map((link,idx)=>{
                             return (
                               <Menu.Item key={link.id}><Link to={link.path}>{link.title}</Link></Menu.Item>
                             )
                           })
                         }
                       </Menu.SubMenu>
                     ) : ""
                 })
             }
         </Menu>
        </Layout.Sider>
    );
  }
}


export default Side;
