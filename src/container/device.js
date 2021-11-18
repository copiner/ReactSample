import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Device from '../component/device';

import { listDve,listedDve } from '../actions/device'

const mapStateToProps  = (state) => ({
     device: state.device
});

const mapDispatchToProps = (dispatch) => {
  return {
      listDve: (props)=>dispatch(listDve(props)),
      listedDve,
      dispatch
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Device);
