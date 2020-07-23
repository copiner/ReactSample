import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import User from '../component/user';

import { getUsers } from '../actions/users'

import * as uAct from '../actions/users'

const mapStateToProps  = (state) => ({
     userList: state.users
});

const mapDispatchToProps = (dispatch) => ({
  userAct: bindActionCreators(uAct, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(User);
