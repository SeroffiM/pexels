import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useIsMobile } from '../../../../hooks/useIsMobile';
import './CategoriesList.css';

interface ICategoriesList {
  categories: string[];
}

export const CategoriesList: React.FC<ICategoriesList> = ({
  categories,
}: ICategoriesList) => {
  const [t] = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div className="background__categories">
      {isMobile ? null : (
        <p className="background__categories-suggested">
          {t('header.suggested')}&nbsp;
        </p>
      )}
      <ul className="categories__list">
        {categories.map((item, index) => (
          <li key={index} className="categories__item">
            <NavLink to={`/search/${item}`} className="categories__link">
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
