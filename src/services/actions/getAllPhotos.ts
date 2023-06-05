import { Dispatch } from "react";
import { getPhotos } from "../../utils/api";

export const GET_ALL_PHOTOS_REQUEST = 'GET_ALL_PHOTOS_REQUEST'
export const GET_ALL_PHOTOS_SUCCEED = 'GET_ALL_PHOTOS_SUCCEED'
export const GET_ALL_PHOTOS_FAILED = 'GET_ALL_PHOTOS_FAILED'

export function getAllPhotos() {
    return function (dispatch: Dispatch<any>) {
        dispatch({
            type: GET_ALL_PHOTOS_REQUEST,
        });

        getPhotos()
            .then((res) => {
                if (res) {
                    dispatch({
                        type: GET_ALL_PHOTOS_SUCCEED,
                        payload: res
                    })
                } else {
                    dispatch({
                        type: GET_ALL_PHOTOS_FAILED,
                    })
                }
            })
            .catch(console.error)
    }
}
