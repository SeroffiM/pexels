import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Gallery } from '../../Gallery/Gallery';
import './MainPage.css';
import { useFetchPhotos } from '../../../hooks/useFetchPhotos';
import { HeaderBackground } from './HeaderBackground/HeaderBackground';

export const MainPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const photos = useTypedSelector((state) => state.photo);
  const fetchPhotos = useFetchPhotos();

  const FetchMoreImg = () => {
    if (
      window.scrollY + window.innerHeight + 50 > document.body.scrollHeight &&
      !photos.loading &&
      !photos.error &&
      photos.photos.length <= photos.total_results
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const baseURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=20`;
    if (photos.photos.length <= photos.total_results) {
      fetchPhotos(baseURL);
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', FetchMoreImg);
    return () => {
      window.removeEventListener('scroll', FetchMoreImg);
    };
  }, [photos.loading]);

  return (
    <>
      <HeaderBackground />
      <main className="main">
        <div className="container">
          <Gallery
            photos={photos.photos}
            loading={photos.loading}
            error={photos.error}
          />
        </div>
      </main>
    </>
  );
};
