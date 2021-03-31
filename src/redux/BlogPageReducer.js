import {ADD_POST, SET_POST, DELETE_POST,NEW_POST, EDIT_POST} from "./TypePost/typePost"



let initialState = {
    posts: [ ]
}



const BlogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST: {
           
            return {
                ...state, posts: [...action.payload]
               // BlogData: [...state.BlogData, { id: 4, title: body ,content: textContent}],
            }
        }
        case ADD_POST:{
            
            if (!state.posts.find(i => i._id === action.payload._id))
            return { ...state, posts: [...state.posts, action.payload] }
        return state;
        }
        default:
            return state
    }
}

export default BlogPageReducer;