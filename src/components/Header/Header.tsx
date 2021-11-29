import React, { ChangeEvent, useEffect, useState } from 'react';
import { useMatch } from 'react-router';
import { HeaderBackground } from './HeaderBackground/HeaderBackground';
import './Header.css';
import { NavBar } from './NavBar/NavBar';

export const Header: React.FC = () => {
  const match = useMatch('/search/:query');
  const matchMain = useMatch('/');
  const [queryNav, setQueryNav] = useState<string>('');
  console.log('HHH', match);

  const [queryBackground, setQueryBackground] = useState('');

  console.log(match?.params.query, 'header');
  useEffect(() => {
    setQueryNav(match?.params.query || '');
  }, [match?.params.query]);
  const handleChangeNav = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQueryNav(e.target.value);
  };

  const handleChangeBackground = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQueryBackground(e.target.value);
  };
  const handleQuery = (value: string) => {
    setQueryNav(value);
    setQueryBackground(value);
  };
  const handleReturnHome = () => {
    setQueryBackground('');
    setQueryNav('');
  };
  return (
    <header className="header">
      <NavBar
        queryText={queryNav}
        handleChange={handleChangeNav}
        handleQuery={handleQuery}
        handleReturnHome={handleReturnHome}
      />
      {matchMain ? (
        <HeaderBackground
          handleChange={handleChangeBackground}
          queryText={queryBackground}
          handleQuery={handleQuery}
        />
      ) : null}
    </header>
  );
};
