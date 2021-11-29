import React from 'react';
import { SearchPhotoIcon } from '../searchIcons/SearchPhotoIcon';
import { NavLink } from 'react-router-dom';
import './SearchSections.css';
import { useQuery } from '../../../../../hooks/useQuery';

interface ISearchSections {
  totalResults: number;
  query: string | undefined;
}

export const SearchSections: React.FC<ISearchSections> = ({
  query,
  totalResults,
}: ISearchSections) => {
  const search = useQuery().toString();
  const filters = search ? `?${search}` : '';
  return (
    <ul className="search-tabs__sections-list">
      <li className="search-tabs__sections-item active">
        <NavLink
          to={`/search/${query}${filters}`}
          className="search-tabs__sectionts-link"
        >
          <i>
            <SearchPhotoIcon />
          </i>
          <span>Photos</span>
          <span className="search-tabs__total-results"> · {totalResults}</span>
        </NavLink>
      </li>
    </ul>
  );
};
