import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom';
import { Layout } from 'antd';
import { loginSt, logoutSt, correctSt,correctMid } from '../actions/login';

import App from './app';
import Login from '../component/login';
import Correct from '../component/login/correct';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props)
    let { status, correct } = this.props.login;
    status = true;
    return (
      <>
        {
          status ? <App {...this.props}/> : (correct ?  <Correct {...this.props} />:<Login {...this.props}/>)
        }
      </>
    )
  }

}

const mapStateToProps  = (state) => ({
    login: state.login
});

const mapDispatchToProps = (dispatch) => ({
  loginSt: (lay) => dispatch(loginSt(lay)),
  logoutSt: (lay) => dispatch(logoutSt(lay)),
  correctSt: (lay) => dispatch(correctSt(lay)),
  correctMid: (lay) => dispatch(correctMid(lay))
});

export default connect(mapStateToProps,mapDispatchToProps)(Index);

// export default App;
