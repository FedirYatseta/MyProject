
import { connect } from 'react-redux';
import Blog from './Blog';
import {add_Post, delete_Post} from "./../../redux/actionPost/actionPost"




let mapStateToProps = (state) =>{

    return {
        BlogPost: state.BlogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () =>{
            dispatch(add_Post());
        },
        deletePost: (posts) =>{
            dispatch(delete_Post(posts))
        }
    }
}


const BlogContainer = connect(mapStateToProps,mapDispatchToProps)(Blog)
export default BlogContainer;