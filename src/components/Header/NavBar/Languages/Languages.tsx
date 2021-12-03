import React, { useState } from 'react';
import './Languages.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { LanguagesModal } from './LanguagesModal';
import { useIsMobile } from '../../../../hooks/useIsMobile';

export const Languages: React.FC = () => {
  const [t, i18n] = useTranslation();
  const [hover, setHover] = useState(false);
  const currentLanguage = i18next.resolvedLanguage;
  const isMobile = useIsMobile();
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
  const handleMouseHover = (): void => {
    if (!isMobile) {
      setHover(!hover);
    }
  };
  const handleMobileTocuh = () => {
    if (isMobile) {
      setHover(!hover);
    }
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
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      onClick={handleMobileTocuh}
    >
      <p>{getCurrentLngName()}</p>
      <i className={`lng__arrow-down ${hover ? 'active' : ''}`}></i>

      {hover ? (
        <LanguagesModal
          languageSettings={languageSettings}
          handleLng={handleLng}
          currentLanguage={currentLanguage}
          handleHover={handleMouseHover}
        />
      ) : null}
    </div>
  );
};
