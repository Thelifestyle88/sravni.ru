import { Dispatch } from "react";
import { getPhotos } from "../../utils/api";

export const GET_USER_PHOTOS_REQUEST = 'GET_USER_PHOTOS_REQUEST'
export const GET_USER_PHOTOS_SUCCEED = 'GET_USER_PHOTOS_SUCCEED'
export const GET_USER_PHOTOS_FAILED = 'GET_USER_PHOTOS_FAILED'

export function getUserPhotos(id: string) {
    return function (dispatch: Dispatch<any>) {
        dispatch({
            type: GET_USER_PHOTOS_REQUEST,
        });
        getPhotos(id)
            .then((res) => {
                if (res) {
                    dispatch({
                        type: GET_USER_PHOTOS_SUCCEED,
                        payload: res
                    })
                } else {
                    dispatch({
                        type: GET_USER_PHOTOS_FAILED,
                    })
                }
            })
            .catch(console.error)
    }
}
