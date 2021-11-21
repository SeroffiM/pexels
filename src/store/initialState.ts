import { IInitialState } from './types/initialStateTypes';



export const initialState:IInitialState = {
  categories: ['Nature','Space','Love','Tree','Ocean',
                'People','City','Architecture','Forest','Car',
                'Music','Robot','Movies','Cartoons','Food',
                'Coffee','Sculptures','Japan','Clothes','America',
                'Beautiful places','Planet','Happiness','New Year','The actors',
                'Books','Animals','Cats','Friendship','Flowers',
                'Technologies','Islands','Maldives','Night city','Sport',
                'Races','Sports cars','Cosplay','History','Chess'],
  photo: {
    photos: [],
    loading: false,
    error: null,
    total_results: 0
  }
};
