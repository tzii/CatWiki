import { combineReducers } from "redux";
import topSearchedReducer from "./topSearchSlice";
import allBreedsReducer from "./allBreedsSlice";

const rootReducer = combineReducers({ topSearched: topSearchedReducer, allBreeds: allBreedsReducer });

export default rootReducer;
