import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MainPage } from './components/pages/MainPage/MainPage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};

export default App;
