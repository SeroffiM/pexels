import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import {
  useFetchPhotos,
  useFetchMorePhotos,
} from '../../../hooks/useFetchPhotos';
import { Gallery } from '../../Gallery/Gallery';
import { SearchTabs } from './SearchTabs/SearchTabs';
import { useQuery } from '../../../hooks/useQuery';
export const CategoriesPage: React.FC = () => {
  const { query } = useParams();
  const search = useQuery();
  const searchParams = search.toString() ? `&${search.toString()}` : '';
  const [page, setPage] = useState<number>(1);
  const photos = useTypedSelector((state) => state.photo);
  const fetchPhotos = useFetchPhotos();
  const fetchMorePhotos = useFetchMorePhotos();
  const orientation = search.get('orientation') || '';
  const size = search.get('size') || '';

  const FetchMoreImg = () => {
    const baseURL = encodeURI(
      `https://api.pexels.com/v1/search?query=${query}&page=${
        page + 1
      }&per_page=20${searchParams}`
    );
    if (
      window.scrollY + window.innerHeight + 50 > document.body.scrollHeight &&
      !photos.loading &&
      !photos.error &&
      photos.photos.length < photos.total_results
    ) {
      fetchMorePhotos(baseURL);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setPage(1);
    const baseURL = encodeURI(
      `https://api.pexels.com/v1/search?query=${query}&page=1&per_page=20${searchParams}`
    );
    fetchPhotos(baseURL);
    window.scrollTo(0, 0);
  }, [query, search]);

  useEffect(() => {
    window.addEventListener('scroll', FetchMoreImg);
    return () => {
      window.removeEventListener('scroll', FetchMoreImg);
    };
  }, [photos.loading]);

  return (
    <main>
      <div className="container">
        <SearchTabs
          totalResults={photos.total_results}
          query={query}
          orientation={orientation}
          size={size}
        />
        <Gallery
          totalResults={photos.total_results}
          photos={photos.photos}
          loading={photos.loading}
          error={photos.error}
          query={query}
        />
      </div>
    </main>
  );
};
