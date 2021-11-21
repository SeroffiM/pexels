import React, { useState, useEffect, ChangeEvent } from 'react';
import logo from '../../../assets/img/icons/logo.svg';
import { SearchBar } from '../SearchBar/SearchBar';
import './NavBar.css';

export const NavBar: React.FC = () => {
  const [position, setPosition] = useState<number>(0);
  const [queryText, setQueryText] = useState('');

  const handleScroll = () => {
    setPosition(window.scrollY);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQueryText(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    setPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={position > 50 ? 'header-nav fixed' : 'header-nav'}>
      <div className="header-logo">
        <img src={logo} className="logo" />
        <p>Pexels</p>
      </div>
      {position > 50 ? (
        <SearchBar handleChange={handleChange} value={queryText} />
      ) : null}
      <div className="header-lng">
        <label htmlFor="ru">Ru</label> <input type="radio" id="ru" name="lng" />
        <label htmlFor="en">En</label> <input type="radio" id="en" name="lng" />
      </div>
    </nav>
  );
};
