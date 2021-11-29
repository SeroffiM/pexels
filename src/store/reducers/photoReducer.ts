import { initialState } from '../initialState';
import { IPhotoState } from '../types/initialStateTypes';
import { PhotoAction, PhotosActionTypes } from '../types/actionTypes/photoActionTypes';

export const photoReducer = ( state = initialState.photo, action: PhotoAction ): IPhotoState => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTOS:
      return { 
        ...state,
        photos:[],
        loading: true 
       };
    case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
      console.log(action);
      return {
        loading: false,
        error: null,
        photos: [...action.payload.photos],
        total_results: action.payload.total_results
      };
      case PhotosActionTypes.FETCH_MORE_PHOTOS:
      return { 
        ...state,
        loading: true 
       };
    case PhotosActionTypes.FETCH_MORE_PHOTOS_SUCCESS:
      console.log(action);
      return {
        loading: false,
        error: null,
        photos: [...state.photos,...action.payload.photos],
        total_results: action.payload.total_results
      };
    case PhotosActionTypes.FETCH_PHOTOS_ERROR:
      return { 
        ...state,
        loading: false,
        error: action.payload
       };
    default:
      return state
  }
};
