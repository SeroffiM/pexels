import React, { MouseEventHandler, useState } from 'react';
import './Languages.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { LanguagesModal } from './LanguagesModal';

export const Languages: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [hover, setHover] = useState(false);
  const currentLanguage = i18next.resolvedLanguage;
  const languageSettings = [
    {
      lng_name: 'Русский',
      lng_id: 'ru',
    },
    {
      lng_name: 'English',
      lng_id: 'en',
    },
  ];
  const handleHover = (): void => {
    setHover(!hover);
  };
  const handleLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const getCurrentLngName = () => {
    return languageSettings.find((item) => item.lng_id === currentLanguage)
      ?.lng_name;
  };
  return (
    <div
      className="lng-wrapper"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <p>{getCurrentLngName()}</p>
      <i className="lng__arrow-down"></i>

      {hover ? (
        <LanguagesModal
          languageSettings={languageSettings}
          handleLng={handleLng}
          currentLanguage={currentLanguage}
          handleHover={handleHover}
        />
      ) : null}
    </div>
  );
};
