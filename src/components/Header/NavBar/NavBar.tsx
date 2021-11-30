import React, { useState, useEffect, ChangeEvent } from 'react';
import { useMatch } from 'react-router';
import logo from '../../../assets/img/icons/logo.svg';
import { SearchBar } from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { Languages } from './Languages/Languages';

interface INavBar {
  queryText: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleQuery: (value: string) => void;
  handleReturnHome: () => void;
}
export const NavBar: React.FC<INavBar> = ({
  queryText,
  handleChange,
  handleQuery,
  handleReturnHome,
}: INavBar) => {
  const [position, setPosition] = useState<number>(0);

  const match = useMatch('/');
  const showSearchBar = position > 50 || !match;

  const handleScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    console.log(match, 'matchSearch');
    setPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={showSearchBar ? 'header-nav fixed' : 'header-nav'}>
      <NavLink onClick={handleReturnHome} to="/" className="header-logo">
        <img src={logo} className="logo" />
        <p>Pexels</p>
      </NavLink>
      {showSearchBar ? (
        <SearchBar
          handleChange={handleChange}
          value={queryText}
          handleQuery={handleQuery}
        />
      ) : null}
      <Languages />
    </nav>
  );
};
