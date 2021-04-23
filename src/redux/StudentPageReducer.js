import { studentAPI } from "../api/api"

let initialState = {
    userData: [],
    name: null,
    address: null,
    email: null,
    contact: null,
    id: null,
    gender: null,
    data1: [],
    isFetching: true,

}
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_NAME_STUDENT = 'SET_NAME_STUDENT'
const CREATE_USER = 'CREATE_USER'
const DELETE_USER = 'DELETE_USER'
const SET_USER_ID = 'SET_USER_ID'

const StudentPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_STUDENT:
            return { ...state, userData: action.userData }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case CREATE_USER: {

            debugger;
            return {
               
                ...state, ...action.payload
            }
        }
        case DELETE_USER:{
            return {
                ...state, userData: state.userData.filter((item, index) => index !== action.payload)
            }
        }
        case SET_USER_ID: {
return{
    ...state, data1: action.data1
}
        }

        default:
            return state
    }
}

export const setStudent = (userData) => ({ type: 'SET_NAME_STUDENT', userData })
export const setStudentId = (id) => ({ type: 'SET_USER_ID', id })
export const setIsFetching = (isFetching) => ({ type: 'TOGGLE_IS_FETCHING', isFetching })
export const createUserAC = (name,address,email,contact,gender) => ({ type: 'CREATE_USER', payload: {name,address,email,contact,gender} })
export const deleteUserId = (index) => ({type: "DELETE_USER", payload: index})

export const getStudent = () => {
    return async (dispatch) => {
        debugger;
        let response = await studentAPI.getUsers()
        dispatch(setStudent(response))
    }
}


export const getStudentId = (id) => {
    return async (dispatch) => {
        debugger;
        let response = await studentAPI.getUserID(id)
        dispatch(setStudentId(response))
    }
}

export const delUser = (id) => {
    return async (dispatch) =>{
        debugger;
        let response = await studentAPI.deleteUser(id);
        dispatch(deleteUserId(response))
        dispatch(getStudent()) 
    }
}


export const createUserThunk = (name,address,email,contact,gender) => {
    return async (dispatch) => {
        debugger;
        let response = await studentAPI.createUser(name,address,email,contact,gender)
        dispatch(createUserAC(response.data))
        dispatch(getStudent());
    }
}

export default StudentPageReducer;