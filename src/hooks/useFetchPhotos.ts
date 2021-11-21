import { useDispatch } from 'react-redux';
import { fetchPhotosRequest } from '../store/actionCreators/fetchPhotos';



export const useFetchPhotos = ():(api:string)=>Promise<void> => {
  const dispatch = useDispatch();

  const fetchImg = async (api: string) => {
    dispatch(fetchPhotosRequest(api));
  };
  return fetchImg;
};
