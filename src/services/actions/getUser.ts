import { Dispatch } from "react";
import { getUser } from "../../utils/api";

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCEED = 'GET_USER_SUCCEED'
export const GET_USER_FAILED = 'GET_USER_FAILED'

export function getUserInformation(id: string) {
    return function (dispatch: Dispatch<any>) {
        dispatch({
            type: GET_USER_REQUEST,
        });
        getUser(id)
            .then((res) => {
                if (res && Object.keys(res).length !== 0) {
                    dispatch({
                        type: GET_USER_SUCCEED,
                        payload: res
                    })
                } else {
                    dispatch({
                        type: GET_USER_FAILED,
                    })
                }
            })
            .catch(console.error)
    }
}