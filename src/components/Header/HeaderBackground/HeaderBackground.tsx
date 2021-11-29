import React, { useEffect, useState, ChangeEvent, useMemo } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { SearchBar } from '../SearchBar/SearchBar';
import { CategoriesList } from './CategoriesList/CategoriesList';
import './HeaderBackground.css';
interface IHeaderBackground {
  queryText: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleQuery: (value: string) => void;
}
interface IBackground {
  img: string;
  link: string;
  author: string;
}

export const HeaderBackground: React.FC<IHeaderBackground> = ({
  handleChange,
  queryText,
  handleQuery,
}: IHeaderBackground) => {
  const categories = useTypedSelector((state) => state.categories);
  const [background, setBackground] = useState<IBackground>({
    img: '',
    link: '',
    author: '',
  });
  const randomCategory = () => {
    return Math.floor(Math.random() * categories.length);
  };
  const getRandomCategories = () => {
    const randomCategories = [];
    for (let i = 0; i <= 7; i++) {
      randomCategories.push(categories[randomCategory()]);
    }
    return randomCategories;
  };
  const fetchImg = async () => {
    try {
      const category = categories[randomCategory()];
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
  const randomCategories = useMemo<string[]>(() => getRandomCategories(), []);
  return (
    <section className="background-wrapper">
      <div className="background__img-wrapper">
        {background.img ? <img src={background.img} alt="background" /> : null}
      </div>
      <div className="background__content-wrapper">
        <h1 className="background__title">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </h1>
        <SearchBar
          handleChange={handleChange}
          value={queryText}
          handleQuery={handleQuery}
        />
        <CategoriesList categories={randomCategories} />
      </div>
      <div className="section-background__footer">
        <a href={background.link} target="blank">
          <span className="background-author">
            Photo by: {background.author}
          </span>
        </a>
      </div>
    </section>
  );
};
