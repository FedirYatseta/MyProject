import { ADD_POST } from "./TypePost/typePost"



let initialState = {
    posts: []
    
}



const BlogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_POST: {
        //     return {
        //         ...state, posts: [...action.payload]
        //         // BlogData: [...state.BlogData, { id: 4, title: body ,content: textContent}],
        //     }
        // }
        case ADD_POST: {
            let title = state.newPostTitle;
            let content = state.newPostContent;
            return {
                ...state,
                posts: [...state.posts, { title: title, content: content }],
                newPostTitle: "",
                newPostContent: ""
            }
        }
        default:
            return state
    }
}

export default BlogPageReducer;