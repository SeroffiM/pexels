import React from 'react';
import { HorizontalIcon } from '../searchIcons/orientationIcons/HorizontalIcon';
import { OrientationIcon } from '../searchIcons/orientationIcons/OrientationIcon';
import { SquareIcon } from '../searchIcons/orientationIcons/SquareIcon';
import { VerticalIcon } from '../searchIcons/orientationIcons/VerticalIcon';
import { LargeIcon } from '../searchIcons/sizeIcons/LargeIcon';
import { MediumIcon } from '../searchIcons/sizeIcons/MediumIcon';
import { SizeIcon } from '../searchIcons/sizeIcons/SizeIcon';
import { SmallIcon } from '../searchIcons/sizeIcons/SmallIcon';
import { SearchSetting } from './SearchSetting/SearchSetting';
import './SearchSettings.css';

interface ISearchSettings {
  query: string | undefined;
  size: string;
  orientation: string;
}

export const SearchSettings: React.FC<ISearchSettings> = ({
  query,
  orientation,
  size,
}: ISearchSettings) => {
  const settings = [
    {
      setting: 'Orientation',
      svg: () => <OrientationIcon />,
      activeFilter: orientation,
      search_filters: [
        {
          filterName: 'All Orientations',
          filter: '',
        },
        {
          filterName: 'Horizontal',
          filter: 'landscape',
          svg: () => <HorizontalIcon />,
        },
        {
          filterName: 'Vertical',
          filter: 'portrait',
          svg: () => <VerticalIcon />,
        },
        {
          filterName: 'Square',
          filter: 'square',
          svg: () => <SquareIcon />,
        },
      ],
    },
    {
      setting: 'Size',
      svg: () => <SizeIcon />,
      activeFilter: size,
      search_filters: [
        {
          filterName: 'All Sizes',
          filter: '',
        },
        {
          filterName: 'Large',
          filter: 'large',
          svg: () => <LargeIcon />,
        },
        {
          filterName: 'Medium',
          filter: 'medium',
          svg: () => <MediumIcon />,
        },
        {
          filterName: 'Small',
          filter: 'small',
          svg: () => <SmallIcon />,
        },
      ],
    },
  ];

  return (
    <ul className="search-tabs__settings-list">
      {settings.map((item, index) => {
        return (
          <SearchSetting
            setting={item.setting}
            acitveFilter={item.activeFilter}
            svg={item.svg}
            key={index}
            search_filters={item.search_filters}
            query={query}
          />
        );
      })}
    </ul>
  );
};
