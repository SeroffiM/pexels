import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoriesList.css';

interface ICategoriesList {
  categories: string[];
}

export const CategoriesList: React.FC<ICategoriesList> = ({
  categories,
}: ICategoriesList) => {
  return (
    <div className="background__categories">
      <p className="background__categories-suggested">Suggested:&nbsp;</p>
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
