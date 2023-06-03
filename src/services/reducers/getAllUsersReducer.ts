import { PayloadAction } from "@reduxjs/toolkit";
import { GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCEED, GET_ALL_USERS_FAILED } from "../actions/getAllUsers";
import { TUser } from "../../utils/typesData";

interface IAllUserState {
    usersData: TUser[],
    allUsersRequest: boolean,
    allUsersFailed: boolean,
    allUsersSucceed: boolean,
}

const initialState: IAllUserState = {
    usersData: [],
    allUsersRequest: false,
    allUsersFailed: false,
    allUsersSucceed: false,
}

export function getAllUsersReducer(state = initialState, action: PayloadAction<Array<TUser>>) {
    switch (action.type) {
        case GET_ALL_USERS_REQUEST: {
            return {
                ...state,
                allUsersRequest: true
            }
        }
        case GET_ALL_USERS_SUCCEED: {
            return {
                ...state,
                allUsersRequest: false,
                allUsersSucceed: true,
                usersData: action.payload
            }
        }
        case GET_ALL_USERS_FAILED: {
            return {
                ...state,
                allUsersRequest: false,
                allUsersSucceed: false,
                allUsersFailed: true
            }
        }
        default: {
            return state;
        }
    }
}