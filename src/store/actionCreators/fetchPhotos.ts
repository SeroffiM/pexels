import {
  PhotosActionTypes,
  PhotoAction,
  payloadSuccessType,
  payloadErrorType,
  apiFetchType,
} from '../types/actionTypes/photoActionTypes';

export const fetchPhotosRequest = (api: apiFetchType): PhotoAction => ({
  type: PhotosActionTypes.FETCH_PHOTOS,
  api: api,
});

export const fetchMorePhotosRequest = (api: apiFetchType): PhotoAction => ({
  type: PhotosActionTypes.FETCH_MORE_PHOTOS,
  api: api,
});

export const fetchPhotosSuccess = (data: payloadSuccessType): PhotoAction => ({
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
  payload: {
    photos: data.photos,
    total_results: data.total_results,
  },
});

export const fetchMorePhotosSuccess = (
  data: payloadSuccessType
): PhotoAction => ({
  type: PhotosActionTypes.FETCH_MORE_PHOTOS_SUCCESS,
  payload: {
    photos: data.photos,
    total_results: data.total_results,
  },
});

export const fetchPhotosError = (error: payloadErrorType): PhotoAction => ({
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
  payload: error,
});
