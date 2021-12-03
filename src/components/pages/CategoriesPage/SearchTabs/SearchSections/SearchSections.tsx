import React from 'react';
import { SearchPhotoIcon } from '../searchIcons/SearchPhotoIcon';
import { NavLink } from 'react-router-dom';
import './SearchSections.css';
import { useQuery } from '../../../../../hooks/useQuery';
import { useTranslation } from 'react-i18next';

interface ISearchSections {
  totalResults: number;
  query: string | undefined;
}

export const SearchSections: React.FC<ISearchSections> = ({
  query,
  totalResults,
}: ISearchSections) => {
  const [t] = useTranslation();
  const search = useQuery().toString();
  const filters = search ? `?${search}` : '';
  const getPhotosCount = () => {
    let count = totalResults;
    if (totalResults >= 1000) {
      count = Math.trunc(totalResults / 1000);
    }
    return count;
  };
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
          <span>{t('categories.title')}</span>
          <span className="search-tabs__total-results">
            · {getPhotosCount()}
            {totalResults >= 1000 ? t('categories.photos_count') : null}
          </span>
        </NavLink>
      </li>
    </ul>
  );
};
