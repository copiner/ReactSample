import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import Side from '../component/layout/side';
import Head from '../component/layout/head';
import Main from '../component/layout/main';

import { routesList } from '../routes/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      current:'0'
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {

    return (
      <>
        <Layout>
         <Side collapsed={this.state.collapsed} routesList={routesList} {...this.props}/>
         <Layout>
           <Head collapsed={this.state.collapsed} toggle={this.toggle} {...this.props}/>
           <Main routesList={routesList} {...this.props}/>
         </Layout>
        </Layout>
      </>
    )
  }

}


export default connect()(App);
