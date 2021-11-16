import { connect } from 'react-redux';
import { listPosts } from '../actions/posts';
import Post from '../component/post';

const mapStateToProps  = (state) => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch) => {
    return {
        listPosts: (posts) => dispatch(listPosts(posts))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

/*
function incrementAsync() {
    return (dispatch, getState) => {
    setTimeout(() => {
     dispatch(increment());
    }, 1000);
    };
}

const mapDispatchToProps = (dispatch) => ({
    incrementAsync:() => {
    setTimeout(() => {
     dispatch(increment());
    }, 1000);
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)

*/
