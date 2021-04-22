import {ADD_POST, DELETE_POST, EDIT_POST,SET_POST} from '../TypePost/typePost'


export function set_Post (edit)
{
    return {
        type: SET_POST,
    }
}
export function add_Post(post)
{
    debugger;
    return {
        type:ADD_POST,  
    }
}

export function delete_Post(post)
{
    return {
        type:DELETE_POST,  
    }
}

export function edit_Post (edit)
{
    return {
        type: EDIT_POST,
    }
}