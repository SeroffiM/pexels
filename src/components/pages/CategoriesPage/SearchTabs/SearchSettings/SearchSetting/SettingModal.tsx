import React from 'react';
import { NavLink } from 'react-router-dom';

interface ISettingModal {
  query: string | undefined;
  setting: string;
  activeFilter: string;
  queryFilter: URLSearchParams;
  closeSetting: (e: React.MouseEvent) => void;
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
  closeSetting,
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
              <NavLink
                to={link}
                className="search-tabs__modal-link"
                onClick={closeSetting}
              >
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
