import {applyMiddleware, combineReducers, createStore } from "redux";
import MainPageReducer from "./MainPageReducer"
import ProjectPageReducer from "./ProjectPageReducer"
import BlogPageReducer from "./BlogPageReducer"
import StudentPageReducer from "./StudentPageReducer"
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers(
    {
        MainPage:  MainPageReducer,
        ProjectPage: ProjectPageReducer,
        BlogPage: BlogPageReducer,
        StudentPage: StudentPageReducer,
    }
);

const store = createStore(reducers, (applyMiddleware(thunkMiddleware)));
window.store = store;
 export default store;