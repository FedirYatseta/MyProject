import {ADD_POST, SET_POST, DELETE_POST,NEW_POST, EDIT_POST, SET_LOADING} from '../TypePost/typePost'

export function add_Post(post)
{
    debugger;
    return {
        type:ADD_POST,  
        payload:post
    }
}

export function set_Post(post)
{
    return {
        type:SET_POST,  
        payload:post
    }
}

export function set_Loading (loaded)
{
    return {
        type: SET_LOADING,
        payload: loaded
    }
}