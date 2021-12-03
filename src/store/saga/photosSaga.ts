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

const getPhotos = async (api: string) => {
  const response = await fetch(api, {
    headers: {
      Authorization: '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
    },
  });
  return await response.json();
};

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
