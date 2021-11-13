import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavBar } from './NavBar/NavBar';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Header: React.FC = () => {
  const categories = useTypedSelector((state) => state.categories);
  console.log(categories);

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
    return Math.floor(Math.random() * categories.length)
  };

  const fetchImg = () => {
    const category = categories[randomCategories()]
    console.log(category);
    
    fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=1`, {
      headers: {
        Authorization:
          '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        const { photographer, photographer_url, src } = data.photos[0];

        setBackground(() => {
          return {
            img: src.landscape,
            link: photographer_url,
            author: photographer,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // fetchImg();
    setBackground(() => {
      return {
        img: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        link: 'https://www.pexels.com/@mikebirdy',
        author: 'Mike',
      };
    });
  }, []);

  return (
    <header className="header">
      <NavBar />
      <div className="header-background">
        {background.img ? <img src={background.img} alt="background" /> : null}
      </div>
      <div className="header-background__footer">
        <a href={background.link} target="blank">
          <span className="background-author">Photo by: {background.author}</span>
        </a>
      </div>
    </header>
  );
};
