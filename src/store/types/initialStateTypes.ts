export interface IInitialState {
  categories: string[],
  photo: IPhotoState
}

export interface IPhotoState {
  photos: string[],
  loading: boolean,
  error: string | null
}