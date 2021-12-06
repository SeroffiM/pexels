import { IPhotos } from './../../components/Gallery/Gallery';
export interface IInitialState {
  categories: string[];
  photo: IPhotoState;
}

export interface IPhotoState {
  photos: IPhotos[];
  loading: boolean;
  error: string | null;
  total_results: number;
}
