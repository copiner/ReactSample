import { connect } from 'react-redux';

import { getPosts } from '../actions/posts';
import Post from '../component/post';

const mapStateToProps  = (state) => ({
    postsList: state.posts
});

const mapDispatchToProps = (dispatch) => ({
    postsAct: (posts) => dispatch(getPosts(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
