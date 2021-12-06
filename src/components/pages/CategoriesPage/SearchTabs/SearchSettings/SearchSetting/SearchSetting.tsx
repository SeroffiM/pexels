import React, { useState } from 'react';
import { SettingModal } from './SettingModal';
import './SearchSetting.css';
import { NavLink } from 'react-router-dom';
import { useQuery } from '../../../../../../hooks/useQuery';
import { useIsMobile } from '../../../../../../hooks/useIsMobile';

interface ISearchSetting {
  query: string | undefined;
  setting: string;
  settingName: string;
  acitveFilter: string;
  svg: () => JSX.Element;
  search_filters: {
    filterName: string;
    filter: string;
    svg?: () => JSX.Element;
  }[];
}

export const SearchSetting: React.FC<ISearchSetting> = ({
  query,
  setting,
  svg,
  search_filters,
  settingName,
  acitveFilter,
}: ISearchSetting) => {
  const [hover, setHover] = useState(false);
  const queryFilter = useQuery();
  const isMobile = useIsMobile();

  const handleHoverEnter = () => {
    if (!isMobile) {
      setHover(true);
    }
  };

  const handleHoverLeave = () => {
    if (!isMobile) {
      setHover(false);
    }
  };

  const closeSetting = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHover(false);
  };

  const handleMobileTouch = () => {
    if (isMobile) {
      setHover(!hover);
    }
  };

  const handleActiveFilter = () => {
    let name = settingName;
    search_filters.forEach((item) => {
      if (item.filter === acitveFilter && acitveFilter) {
        name = item.filterName;
      }
    });
    return name;
  };

  const resetFilterLink = () => {
    queryFilter.delete(setting);
    return queryFilter.toString();
  };

  return (
    <li
      className={`search-tabs__settings-item ${acitveFilter ? 'active' : ''}`}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      onClick={handleMobileTouch}
    >
      <i>{svg()}</i>
      <span>{handleActiveFilter()}</span>
      {hover ? (
        <SettingModal
          activeFilter={acitveFilter}
          search_filters={search_filters}
          query={query}
          setting={setting}
          queryFilter={queryFilter}
          closeSetting={closeSetting}
        />
      ) : null}
      {acitveFilter ? (
        <NavLink
          onClick={closeSetting}
          to={`/search/${query}?${resetFilterLink()}`}
          className="search-tabs__settings-cancel"
        />
      ) : null}
    </li>
  );
};
