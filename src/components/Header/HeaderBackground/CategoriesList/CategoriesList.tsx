import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './CategoriesList.css';

interface ICategoriesList {
  categories: string[];
}

export const CategoriesList: React.FC<ICategoriesList> = ({
  categories,
}: ICategoriesList) => {
  const [t] = useTranslation();
  return (
    <div className="background__categories">
      <p className="background__categories-suggested">
        {t('header.suggested')}&nbsp;
      </p>
      <ul className="categories__list">
        {categories.map((item, index) => {
          return (
            <li key={index} className="categories__item">
              <NavLink to={`/search/${item}`} className="categories__link">
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
