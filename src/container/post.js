import { connect } from 'react-redux';

import { getPosts } from '../actions';
import Post from '../component/post';

const mapStateToProps  = (state) => ({
    // posts: state.posts   // 合并的reducer
    posts: state.posts.posts    // 单独的reducer
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (posts) => dispatch(getPosts(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
