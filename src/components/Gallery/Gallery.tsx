import React from 'react';
import './Gallery.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GalleryCard } from './GalleryCard/GalleryCard';

interface GalleryProps {
  photos: any[];
  loading: boolean;
  error: string | null;
  totalResults: number;
  query?: string;
}

export interface IPhotos {
  id: number;
  photographer: string;
  photographer_url: string;
  src: {
    large: string;
  };
}
export const Gallery: React.FC<GalleryProps> = ({
  photos,
  loading,
  error,
  totalResults,
  query,
}: GalleryProps) => {
  console.log(photos);
  if (totalResults === 0 && !loading) {
    return (
      <h1 className="gallery__title">{`We Couldn't Find Anything For "${query}"`}</h1>
    );
  }
  return (
    <div className="gallery-container">
      {query ? <h1 className="gallery__title">{query} Photos</h1> : null}
      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 1077: 3, 1900: 4 }}>
        <Masonry gutter="1.65rem">
          {photos.map((photo) => {
            const { photographer, photographer_url, src, id }: IPhotos = photo;

            return (
              <GalleryCard
                id={id}
                photographer={photographer}
                photographer_url={photographer_url}
                src={src}
                key={id}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      {loading ? (
        <div className="gallery-loader">
          <div className="gallery-loader__item"></div>
          <div className="gallery-loader__item"></div>
          <div className="gallery-loader__item"></div>
          <div className="gallery-loader__item"></div>
        </div>
      ) : null}
      {error ? <h2>Error</h2> : null}
    </div>
  );
};
