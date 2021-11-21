import React, { ChangeEvent, FormEvent } from 'react';
import { SearchIcon } from './SearchIcon';
import './SearchBar.css';

interface ISearchBar {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const SearchBar: React.FC<ISearchBar> = ({
  handleChange,
  value,
}: ISearchBar) => {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="search-bar">
      <form>
        <div className="search-bar__container">
          <input
            type="search"
            value={value}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder="Search for free photos"
          />
          <button onClick={handleSearch}>
            <i>
              <SearchIcon />
            </i>
          </button>
        </div>
      </form>
    </div>
  );
};
