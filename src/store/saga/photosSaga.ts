import {
  FetchPhotosAction,
  PhotosActionTypes,
} from './../types/actionTypes/photoActionTypes';
import {
  fetchPhotosError,
  fetchPhotosSuccess,
} from './../actionCreators/fetchPhotos';
import { all, call, put, takeLatest } from '@redux-saga/core/effects';

const getPhotos = async (api: string) => {
  const response = await fetch(api, {
    headers: {
      // Authorization: '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
      Authorization: '563492ad6f91700001000001b32c8f0c567d424cb0327fc4174a09b8'
    },
  });
  return await response.json();
};

function* fetchPhotosSaga({ api }: FetchPhotosAction): any {
  console.log(api);

  try {
    const data = yield call(getPhotos, api);
    console.log(data);
    yield put(fetchPhotosSuccess(data));
  } catch (e: any) {
    console.log(e);

    yield put(fetchPhotosError(e));
  }
}

function* photosSaga(): Generator {
  yield all([takeLatest(PhotosActionTypes.FETCH_PHOTOS, fetchPhotosSaga)]);
}

export default photosSaga;


