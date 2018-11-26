import { connect } from 'react-redux';

import { getPosts } from '../actions';
import PostList from '../component/PostList';

const mapStateToProps  = (state) => ({
    // posts: state.posts   // 合并的reducer
    posts: state.posts.posts    // 单独的reducer
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (posts) => dispatch(getPosts(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
