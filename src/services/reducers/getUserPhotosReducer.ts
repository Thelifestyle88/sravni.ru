import { PayloadAction } from "@reduxjs/toolkit";
import { GET_USER_PHOTOS_REQUEST, GET_USER_PHOTOS_SUCCEED, GET_USER_PHOTOS_FAILED } from "../actions/getUserPhotos";
import { TPhotos } from "../../utils/typesData";

interface IAllUserState {
    photosData: TPhotos[],
    userPhotosRequest: boolean,
    userPhotosFailed: boolean,
    userPhotosSucceed: boolean,
}

const initialState: IAllUserState = {
    photosData: [],
    userPhotosRequest: false,
    userPhotosFailed: false,
    userPhotosSucceed: false,
}

export function getUserPhotosReducer(state = initialState, action: PayloadAction<Array<TPhotos>>) {
    switch (action.type) {
        case GET_USER_PHOTOS_REQUEST: {
            return {
                ...state,
                userPhotosRequest: true,
                userPhotosSucceed: false,
            }
        }
        case GET_USER_PHOTOS_SUCCEED: {
            return {
                ...state,
                userPhotosRequest: false,
                userPhotosSucceed: true,
                photosData: action.payload
            }
        }
        case GET_USER_PHOTOS_FAILED: {
            return {
                ...state,
                userPhotosRequest: false,
                userPhotosSucceed: false,
                userPhotosFailed: true
            }
        }
        default: {
            return state;
        }
    }
}