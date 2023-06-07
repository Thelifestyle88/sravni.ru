import { PayloadAction } from "@reduxjs/toolkit";
import { GET_USER_REQUEST, GET_USER_SUCCEED, GET_USER_FAILED } from "../actions/getUser";
import { TUser } from "../../utils/typesData";

interface IAllUserState {
    userData: TUser | null
    userRequest: boolean,
    userFailed: boolean,
    userSucceed: boolean,
}

const initialState: IAllUserState = {
    userData: null,
    userRequest: false,
    userFailed: false,
    userSucceed: false,
}

export function getUserReducer(state = initialState, action: PayloadAction<TUser>) {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return {
                ...state,
                userRequest: true,
                userFailed: false,
                userSucceed: false,
                userData: null
            }
        }
        case GET_USER_SUCCEED: {
            return {
                ...state,
                userRequest: false,
                userSucceed: true,
                userFailed: false,
                userData: action.payload
            }
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                userRequest: false,
                userSucceed: false,
                userFailed: true
            }
        }
        default: {
            return state;
        }
    }
}