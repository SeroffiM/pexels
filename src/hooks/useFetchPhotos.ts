import { useDispatch } from 'react-redux';
import {
  fetchPhotosRequest,
  fetchMorePhotosRequest,
} from '../store/actionCreators/fetchPhotos';

export const useFetchPhotos = (): ((api: string) => Promise<void>) => {
  const dispatch = useDispatch();

  const fetchImg = async (api: string) => {
    dispatch(fetchPhotosRequest(api));
  };
  return fetchImg;
};

export const useFetchMorePhotos = (): ((api: string) => Promise<void>) => {
  const dispatch = useDispatch();

  const fetchImg = async (api: string) => {
    dispatch(fetchMorePhotosRequest(api));
  };
  return fetchImg;
};
