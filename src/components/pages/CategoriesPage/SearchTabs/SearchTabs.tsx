import React from 'react';
import { SearchSections } from './SearchSections/SearchSections';
import { SearchSettings } from './SearchSettings/SearchSettings';
import './SearchTabs.css';

interface ISearchTabs {
  totalResults: number;
  query: string | undefined;
  orientation: string;
  size: string;
}

export const SearchTabs: React.FC<ISearchTabs> = ({
  totalResults,
  query,
  orientation,
  size,
}: ISearchTabs) => {
  return (
    <div className="search-tabs">
      <SearchSections totalResults={totalResults} query={query} />
      <SearchSettings query={query} orientation={orientation} size={size} />
    </div>
  );
};
