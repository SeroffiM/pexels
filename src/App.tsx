import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MainPage } from './components/pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import { CategoriesPage } from './components/pages/CategoriesPage/CategoriesPage';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/:query" element={<CategoriesPage />} />
        <Route
          path="*"
          element={
            <h1 className="page-not-found__title">{t('page_not_found')}</h1>
          }
        />
      </Routes>
    </>
  );
};

export default App;
