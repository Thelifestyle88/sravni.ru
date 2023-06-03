import { Dispatch } from "react";
import { getUsers } from "../../utils/api";

export const GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST' = 'GET_ALL_USERS_REQUEST'
export const GET_ALL_USERS_SUCCEED: 'GET_ALL_USERS_SUCCEED' = 'GET_ALL_USERS_SUCCEED'
export const GET_ALL_USERS_FAILED: 'GET_ALL_USERS_FAILED' = 'GET_ALL_USERS_FAILED'

export function getAllUsers() {
    return function (dispatch: Dispatch<any>) {
        dispatch({
            type: GET_ALL_USERS_REQUEST,
        });
        getUsers()
            .then((res) => {
                if (res) {
                    dispatch({
                        type: GET_ALL_USERS_SUCCEED,
                        payload: res
                    })
                } else {
                    dispatch({
                        type: GET_ALL_USERS_FAILED,
                    })
                }
            })
            .catch(console.error)
    }
}