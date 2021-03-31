
import { connect } from 'react-redux';
import Blog from './Blog';
import {add_Post} from "./../../redux/actionPost/actionPost"
import { useDispatch } from 'react-redux';
import {NewPost} from '../../redux/services/post_services'



const CreatePost = function (props)
{
  
  const dispatch = useDispatch();
  const  SubmitPostFormCreate = (modalPost)=> {
    dispatch(NewPost(modalPost));
  }
 
}

let mapStateToProps = (state) =>{

    return {
        BlogPost: state.BlogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost  : (post) =>{
            dispatch(add_Post(post));
        }
    }
}


const BlogContainer = connect(mapStateToProps,mapDispatchToProps)(Blog)
export default BlogContainer;