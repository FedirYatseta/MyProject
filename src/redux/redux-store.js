import { combineReducers, createStore } from "redux";
import MainPageReducer from "./MainPageReducer"
import ProjectPageReducer from "./ProjectPageReducer"
import MapAPIConcatReducer from "./MapAPIContactReducer"

let reducers = combineReducers(
    {
        MainPage:  MainPageReducer,
        ProjectPage: ProjectPageReducer,
        GoogleMap: MapAPIConcatReducer
    }
);

let store = createStore(reducers);

 export default store;