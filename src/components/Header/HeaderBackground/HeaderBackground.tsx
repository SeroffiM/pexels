import React, {
  useEffect,
  useState,
  ChangeEvent,
  useMemo,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { getPhotos } from '../../../api/photoAPI';
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
  const [t] = useTranslation();
  const categories = useTypedSelector((state) => state.categories);
  const [background, setBackground] = useState<IBackground>({
    img: '',
    link: '',
    author: '',
  });

  const randomCategory = useCallback(() => {
    return Math.floor(Math.random() * categories.length);
  }, [categories.length]);

  const getRandomCategories = useCallback(() => {
    const randomCategories = [];
    for (let i = 0; i <= 7; i++) {
      randomCategories.push(categories[randomCategory()]);
    }
    return randomCategories;
  }, [categories, randomCategory]);

  const fetchImg = async () => {
    try {
      const category = categories[randomCategory()];
      const api = `https://api.pexels.com/v1/search?query=${category}&per_page=1`;
      const data = await getPhotos(api);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomCategories = useMemo<string[]>(
    () => getRandomCategories(),
    [getRandomCategories]
  );

  return (
    <section className="background-wrapper">
      <div className="background__img-wrapper">
        {background.img ? <img src={background.img} alt="background" /> : null}
      </div>
      <div className="background__content-wrapper">
        <h1 className="background__title">{t('header.main_title')}</h1>
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
            {t('header.photo_by')}&nbsp;
            {background.author}
          </span>
        </a>
      </div>
    </section>
  );
};
