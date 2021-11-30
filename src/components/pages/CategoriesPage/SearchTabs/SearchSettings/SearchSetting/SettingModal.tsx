import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '../../../../../../hooks/useQuery';

interface ISettingModal {
  query: string | undefined;
  setting: string;
  activeFilter: string;
  queryFilter: URLSearchParams;
  search_filters: {
    filterName: string;
    filter: string;
    svg?: () => JSX.Element;
  }[];
}

export const SettingModal: React.FC<ISettingModal> = ({
  query,
  search_filters,
  activeFilter,
  setting,
  queryFilter,
}: ISettingModal) => {
  const getLink = (filter: string): string => {
    if (filter) {
      queryFilter.set(setting, filter);
    } else {
      queryFilter.delete(setting);
    }
    return queryFilter.toString();
  };

  return (
    <div className="search-tabs__modal">
      <ul className="search-tabs__modal-list">
        {search_filters.map((item, index) => {
          const filters = getLink(item.filter);
          const link = `/search/${query}?${filters}`;
          const active = item.filter === activeFilter;
          return (
            <li
              key={index}
              className={`search-tabs__modal-item ${active ? 'active' : ''}`}
            >
              <NavLink to={link} className="search-tabs__modal-link">
                {item.svg ? <i>{item.svg()}</i> : null}
                <span>{item.filterName}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
