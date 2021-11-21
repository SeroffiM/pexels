export interface IInitialState {
  categories: string[];
  photo: IPhotoState;
}

export interface IPhotoState {
  photos: any[];
  loading: boolean;
  error: string | null;
  total_results: number;
}
