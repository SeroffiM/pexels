import { initialState } from '../initialState';
import { IPhotoState } from '../types/initialStateTypes';
import { PhotoAction, PhotosActionTypes } from '../types/actionTypes/photoActionTypes';

export const photoReducer = ( state = initialState.photo, action: PhotoAction ): IPhotoState => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTOS:
      return { loading: true, error: null, photos: [] };
    case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        loading: false,
        error: null,
        photos: [state,...action.payload],
      };
    case PhotosActionTypes.FETCH_PHOTOS_ERROR:
      return { loading: false, error: action.payload, photos: [] };
    default:
      return state
  }
};
