import { combineReducers } from "redux";
import { getAllUsersReducer } from "./reducers/getAllUsersReducer";
import { getAllPhotosReducer } from "./reducers/getAllPhotosReducer";

export const rootReducer = combineReducers({
    getAllUsersReducer,
    getAllPhotosReducer
})