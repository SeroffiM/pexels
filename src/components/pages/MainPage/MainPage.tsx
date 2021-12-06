import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Gallery } from '../../Gallery/Gallery';
import './MainPage.css';
import {
  useFetchPhotos,
  useFetchMorePhotos,
} from '../../../hooks/useFetchPhotos';

export const MainPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const photos = useTypedSelector((state) => state.photo);
  const fetchPhotos = useFetchPhotos();
  const fetchMorePhotos = useFetchMorePhotos();

  const setNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const FetchMoreImg = () => {
    const baseURL = `https://api.pexels.com/v1/curated?page=${
      page + 1
    }&per_page=20`;
    fetchMorePhotos(
      baseURL,
      setNextPage,
      photos.loading,
      photos.error,
      photos.photos.length,
      photos.total_results
    );
  };

  useEffect(() => {
    const baseURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=20`;
    if (photos.photos.length <= photos.total_results) {
      fetchPhotos(baseURL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', FetchMoreImg);
    return () => {
      window.removeEventListener('scroll', FetchMoreImg);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos.loading]);

  return (
    <>
      <main className="main">
        <div className="container">
          <Gallery
            photos={photos.photos}
            loading={photos.loading}
            error={photos.error}
            totalResults={photos.total_results}
          />
        </div>
      </main>
    </>
  );
};
