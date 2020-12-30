import { combineReducers } from "redux";
import topSearchedReducer from "./topSearchSlice";
import allBreedsReducer from "./allBreedsSlice";
import isLoadingReducer from "./isLoadingSlice";

const rootReducer = combineReducers({
  topSearched: topSearchedReducer,
  allBreeds: allBreedsReducer,
  isLoading: isLoadingReducer,
});

export default rootReducer;
