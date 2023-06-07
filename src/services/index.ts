import { combineReducers } from "redux";
import { getAllUsersReducer } from "./reducers/getAllUsersReducer";
import { getUserPhotosReducer } from "./reducers/getUserPhotosReducer";
import { getUserReducer } from "./reducers/getUserReducer";

export const rootReducer = combineReducers({
    getAllUsersReducer,
    getUserPhotosReducer,
    getUserReducer
})