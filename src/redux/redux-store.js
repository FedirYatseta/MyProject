import { combineReducers, createStore } from "redux";
import MainPageReducer from "./MainPageReducer"
import ProjectPageReducer from "./ProjectPageReducer"
import BlogPageReducer from "./BlogPageReducer"

let reducers = combineReducers(
    {
        MainPage:  MainPageReducer,
        ProjectPage: ProjectPageReducer,
        BlogPage: BlogPageReducer
    }
);

let store = createStore(reducers);

 export default store;