import { IPhotos } from './../../../components/Gallery/Gallery';
export enum PhotosActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_MORE_PHOTOS = 'FETCH_MORE_PHOTOS',
  FETCH_MORE_PHOTOS_SUCCESS = 'FETCH_MORE_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
}

export type payloadSuccessType = {
  photos: IPhotos[];
  total_results: number;
};
export type payloadErrorType = string;
export type apiFetchType = string;

export interface FetchPhotosAction {
  type: PhotosActionTypes.FETCH_PHOTOS;
  api: apiFetchType;
}

interface FetchPhotosSuccessAction {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS;
  payload: payloadSuccessType;
}

export interface FetchMorePhotosAction {
  type: PhotosActionTypes.FETCH_MORE_PHOTOS;
  api: apiFetchType;
}

interface FetchMorePhotosSuccessAction {
  type: PhotosActionTypes.FETCH_MORE_PHOTOS_SUCCESS;
  payload: payloadSuccessType;
}

interface FetchPhotosErrorAction {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR;
  payload: payloadErrorType;
}

export type PhotoAction =
  | FetchPhotosAction
  | FetchPhotosSuccessAction
  | FetchMorePhotosAction
  | FetchMorePhotosSuccessAction
  | FetchPhotosErrorAction;
