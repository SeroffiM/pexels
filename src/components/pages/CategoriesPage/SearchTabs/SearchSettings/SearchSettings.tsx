import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const [t] = useTranslation();
  const settings = [
    {
      setting: 'orientation',
      settingName: t('categories.orientationSetting.settingName'),
      svg: () => <OrientationIcon />,
      activeFilter: orientation,
      search_filters: [
        {
          filterName: t('categories.orientationSetting.all'),
          filter: '',
        },
        {
          filterName: t("categories.orientationSetting.horizontal"),
          filter: 'landscape',
          svg: () => <HorizontalIcon />,
        },
        {
          filterName: t("categories.orientationSetting.vertical"),
          filter: 'portrait',
          svg: () => <VerticalIcon />,
        },
        {
          filterName: t("categories.orientationSetting.square"),
          filter: 'square',
          svg: () => <SquareIcon />,
        },
      ],
    },
    {
      setting: 'size',
      settingName: t('categories.sizeSetting.settingName'),
      svg: () => <SizeIcon />,
      activeFilter: size,
      search_filters: [
        {
          filterName: t("categories.sizeSetting.all"),
          filter: '',
        },
        {
          filterName: t("categories.sizeSetting.large"),
          filter: 'large',
          svg: () => <LargeIcon />,
        },
        {
          filterName: t("categories.sizeSetting.medium"),
          filter: 'medium',
          svg: () => <MediumIcon />,
        },
        {
          filterName: t("categories.sizeSetting.small"),
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
            settingName={item.settingName}
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
