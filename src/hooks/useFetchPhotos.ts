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

export const useFetchMorePhotos = (): ((
  api: string,
  setNextPage: () => void,
  loading: boolean,
  error: string | null,
  length: number,
  total_rusults: number
) => Promise<void>) => {
  const dispatch = useDispatch();

  const dispatchPhotos = async (api: string) => {
    dispatch(fetchMorePhotosRequest(api));
  };

  const fetchImg = async (
    api: string,
    setNextPage: () => void,
    loading: boolean,
    error: string | null,
    length: number,
    total_rusults: number
  ) => {
    if (
      window.scrollY + window.innerHeight + 50 > document.body.scrollHeight &&
      !loading &&
      !error &&
      length < total_rusults
    ) {
      dispatchPhotos(api);
      setNextPage();
    }
  };
  return fetchImg;
};
