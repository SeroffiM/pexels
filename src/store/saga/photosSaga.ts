import {
  FetchPhotosAction,
  PhotosActionTypes,
} from './../types/actionTypes/photoActionTypes';
import {
  fetchPhotosError,
  fetchPhotosSuccess,
  fetchMorePhotosSuccess,
} from './../actionCreators/fetchPhotos';
import {
  all,
  call,
  put,
  takeLatest,
  takeLeading,
} from '@redux-saga/core/effects';
import { getPhotos } from '../../api/photoAPI';


function* fetchPhotosSaga({ api }: FetchPhotosAction): any {
  try {
    const data = yield call(getPhotos, api);
    yield put(fetchPhotosSuccess(data));
  } catch (e: any) {
    console.log(e);

    yield put(fetchPhotosError(e));
  }
}

function* fetchMorePhotosSaga({ api }: FetchPhotosAction): any {
  try {
    const data = yield call(getPhotos, api);

    yield put(fetchMorePhotosSuccess(data));
  } catch (e: any) {
    console.log(e);

    yield put(fetchPhotosError(e));
  }
}

function* photosSaga(): Generator {
  yield all([
    takeLatest(PhotosActionTypes.FETCH_PHOTOS, fetchPhotosSaga),
    takeLeading(PhotosActionTypes.FETCH_MORE_PHOTOS, fetchMorePhotosSaga),
  ]);
}

export default photosSaga;
