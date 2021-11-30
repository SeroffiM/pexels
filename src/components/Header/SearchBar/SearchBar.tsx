import React, { ChangeEvent, FormEvent, useState } from 'react';
import { SearchIcon } from './SearchIcon';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../../hooks/useQuery';
import { useTranslation } from 'react-i18next';

interface ISearchBar {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleQuery: (value: string) => void;
}

export const SearchBar: React.FC<ISearchBar> = ({
  handleChange,
  value,
  handleQuery,
}: ISearchBar) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const query = useQuery().toString();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search/${value}?${query}`);
    handleQuery(value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="search-bar__container">
          <input
            type="search"
            value={value}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder={t('header.search')}
          />
          <button>
            <i>
              <SearchIcon />
            </i>
          </button>
        </div>
      </form>
    </div>
  );
};
