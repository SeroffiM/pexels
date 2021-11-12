import React, { useState, useEffect } from 'react';
import logo from '../../../assets/img/icons/logo.svg';
import './NavBar.css';

export const NavBar: React.FC = () => {
  const [position, setPosition] = useState<number>(0);
  const handleScroll = () => {
    setPosition(window.scrollY);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={position > 50 ? 'header-nav fixed' : 'header-nav'}>
      <div className="header-logo">
        <img src={logo} className="logo" />
        <p>Pexels</p>
      </div>
      <div className="header-lng">
        <label htmlFor="ru">Ru</label> <input type="radio" id="ru" name="lng" />
        <label htmlFor="en">En</label> <input type="radio" id="en" name="lng" />
      </div>
    </nav>
  );
};
