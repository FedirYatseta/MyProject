import { combineReducers, createStore } from "redux";
import MainPageReducer from "./MainPageReducer"
import ProjectPageReducer from "./ProjectPageReducer"

let reducers = combineReducers(
    {
        MainPage:  MainPageReducer,
        ProjectPage: ProjectPageReducer,
    }
);

let store = createStore(reducers);

 export default store;