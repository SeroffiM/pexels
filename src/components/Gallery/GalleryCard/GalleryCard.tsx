import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { IPhotos } from '../Gallery';
import './GalleryCard.css';
import { DownloadIcon } from './icons/DownloadIcon';
import { LikeIcon } from './icons/LikeIcon';

export const GalleryCard: React.FC<IPhotos> = ({
  photographer,
  photographer_url,
  src,
  id,
  width,
  height,
}: IPhotos) => {
  const [isHoverd, setIsHoverd] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const showAuthor = useMediaQuery({ query: '(min-width: 550px)' });
  const padding = (height / width) * 100;

  const getLikes = (): number[] => {
    let value = [];
    const likes = window.localStorage.getItem('likes');
    if (likes) {
      value = JSON.parse(likes);
    }
    return value;
  };

  const isLiked = () => {
    const values: number[] = getLikes();
    const isExist = values.find((item) => item === id);
    return isExist;
  };

  const setLikes = () => {
    if (isLiked()) {
      setLiked(true);
    }
  };

  const handleLikes = () => {
    let values: number[] = getLikes();
    if (isLiked()) {
      values = values.filter((item) => item !== id);
    } else {
      values.push(id);
    }
    setLiked(!liked);
    window.localStorage.setItem('likes', JSON.stringify(values));
  };

  useEffect(() => {
    setLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHover = () => {
    setIsHoverd(!isHoverd);
  };

  return (
    <div
      className="gallery-card"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{ paddingTop: `${padding}%` }}
    >
      <img src={src.large} className="gallery-img" alt="gallery-img" />
      {isHoverd || isMobile ? (
        <div className="card-info card-info-overlay">
          {showAuthor ? (
            <a className="card-link" href={photographer_url} target="blank">
              {photographer}
            </a>
          ) : null}
          <div className="card-icons">
            <LikeIcon liked={liked} handleLikes={handleLikes} />
            <DownloadIcon api={src.large} photographer={photographer} id={id} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
