import { PayloadAction } from "@reduxjs/toolkit";
import { GET_ALL_PHOTOS_REQUEST, GET_ALL_PHOTOS_SUCCEED, GET_ALL_PHOTOS_FAILED } from "../actions/getAllPhotos";
import { TPhotos } from "../../utils/typesData";

interface IAllUserState {
    photosData: TPhotos[],
    allPhotosRequest: boolean,
    allPhotosFailed: boolean,
    allPhotosSucceed: boolean,
}

const initialState: IAllUserState = {
    photosData: [],
    allPhotosRequest: false,
    allPhotosFailed: false,
    allPhotosSucceed: false,
}

export function getAllPhotosReducer(state = initialState, action: PayloadAction<Array<TPhotos>>) {
    switch (action.type) {
        case GET_ALL_PHOTOS_REQUEST: {
            return {
                ...state,
                allPhotosRequest: true
            }
        }
        case GET_ALL_PHOTOS_SUCCEED: {
            return {
                ...state,
                allPhotosRequest: false,
                allPhotosSucceed: true,
                photosData: action.payload
            }
        }
        case GET_ALL_PHOTOS_FAILED: {
            return {
                ...state,
                allPhotosRequest: false,
                allPhotosSucceed: false,
                allPhotosFailed: true
            }
        }
        default: {
            return state;
        }
    }
}