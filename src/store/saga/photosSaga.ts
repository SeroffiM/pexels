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

function* fetchPhotosSaga({ api }: FetchPhotosAction): unknown {
  try {
    const data = yield call(getPhotos, api);
    yield put(fetchPhotosSuccess(data));
  } catch (e: unknown) {
    console.log(e);
    if (e instanceof Error) {
      yield put(fetchPhotosError(e.message));
    }
  }
}

function* fetchMorePhotosSaga({ api }: FetchPhotosAction): unknown {
  try {
    const data = yield call(getPhotos, api);
    yield put(fetchMorePhotosSuccess(data));
  } catch (e: unknown) {
    if (e instanceof Error) {
      yield put(fetchPhotosError(e.message));
    }
  }
}

function* photosSaga(): Generator {
  yield all([
    takeLatest(PhotosActionTypes.FETCH_PHOTOS, fetchPhotosSaga),
    takeLeading(PhotosActionTypes.FETCH_MORE_PHOTOS, fetchMorePhotosSaga),
  ]);
}

export default photosSaga;
