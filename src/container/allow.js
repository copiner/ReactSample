import { connect } from 'react-redux';

import { allowSt } from '../actions/allow';
import Allowed from '../component/allow';

const mapStateToProps  = (state) => ({
    allow: state.allow
});

const mapDispatchToProps = (dispatch) => ({
    allowSt: (alw) => dispatch(allowSt(alw))
});

export default connect(mapStateToProps, mapDispatchToProps)(Allowed);
