import React from 'react';

interface ILanguagesModal {
  languageSettings: {
    lng_name: string;
    lng_id: string;
  }[];
  handleLng: (lng: string) => void;
  currentLanguage: string;
  handleHover: () => void;
}

export const LanguagesModal: React.FC<ILanguagesModal> = ({
  languageSettings,
  handleLng,
  currentLanguage,
  handleHover,
}: ILanguagesModal) => {
  const handleChangeLng = (lng:string) => {
    handleLng(lng)
    handleHover()
  }
  return (
    <div className="lng__drop-down">
      <ul className="lng__modal-list">
        {languageSettings.map((item, index) => {
          return (
            <li
              key={index}
              className={`lng__modal-item ${
                currentLanguage === item.lng_id ? 'active' : ''
              }`}
            >
              <p
                className="lng_modal-text"
                onClick={() => handleChangeLng(item.lng_id)}
              >
                {item.lng_name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
