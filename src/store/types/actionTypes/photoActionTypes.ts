export enum PhotosActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR'
}

interface FetchPhotosAction {
  type: PhotosActionTypes.FETCH_PHOTOS
}

interface FetchPhotosSuccessAction {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
  payload: any[]
}

interface FetchPhotosErrorAction {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
  payload: string
}

export type PhotoAction = FetchPhotosAction | FetchPhotosSuccessAction | FetchPhotosErrorAction