import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavBar } from './NavBar/NavBar';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Header: React.FC = () => {
  const categories = useTypedSelector((state) => state.categories);
  interface IBackground {
    img: string;
    link: string;
    author: string;
  }

  const [background, setBackground] = useState<IBackground>({
    img: '',
    link: '',
    author: '',
  });
  const randomCategories = () => {
    return Math.floor(Math.random() * categories.length);
  };

  const fetchImg = async () => {
    try {
      const category = categories[randomCategories()];
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${category}&per_page=1`,
        {
          headers: {
            Authorization:
              '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
          },
        }
      );
      const data = await response.json();
      const { photographer, photographer_url, src } = data.photos[0];
      setBackground(() => {
        return {
          img: src.landscape,
          link: photographer_url,
          author: photographer,
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchImg();
  }, []);

  return (
    <header className="header">
      <NavBar />
      <div className="header-background">
        {background.img ? <img src={background.img} alt="background" /> : null}
      </div>
      <div className="header-background__footer">
        <a href={background.link} target="blank">
          <span className="background-author">
            Photo by: {background.author}
          </span>
        </a>
      </div>
    </header>
  );
};
