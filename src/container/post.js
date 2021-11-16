import { connect } from 'react-redux';
import { listPosts, postsuc } from '../actions/posts';
import Post from '../component/post';
import Postserver from "../services/post"

const mapStateToProps  = (state,props) => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch, props) => {
    return {
        listPosts: (posts) => dispatch(listPosts(posts)),//async 方法1 redux-thunk
        listPost:(post)=>{
            console.log(post)
            //async 方法2
            Postserver.getPosts(post).then((data)=>{
                dispatch(postsuc(data))
            }).catch(e=>{
                console.log(e)
            })
        }
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
