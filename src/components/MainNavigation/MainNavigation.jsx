import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/navigation';
import { useTranslation } from '../../contexts/LocalizationContext';
import './MainNavigation.css';

const basename = import.meta.env.VITE_APP_BASENAME || '/';

// Маппинг языковых кодов к названиям языков для alt-текстов и доступности
const LANGUAGE_NAMES = {
  en: '',
  uk: '',
  de: '',
  pl: '',
  nl: '',
};

function MainNavigation() {
  const { t, locale, setLocale } = useTranslation();

  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
  };

  return (
    <nav>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.path} data-aos="fade-down" data-aos-delay={link.aosDelay}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t(link.labelKey)}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Переключатель языка с флагами */}
      <div className="language-switcher">
        {/* Отображаем текущий выбранный флаг */}
        <div className="current-language-display">
          <img
            src={`${basename}images/flags/${locale}.svg`} // Путь к текущему флагу
            alt={LANGUAGE_NAMES[locale]}
            className="flag-icon current-flag"
          />
          {/* Можно добавить текстовое название рядом с флагом, если хотите: */}
          {/* <span className="language-name">{LANGUAGE_NAMES[locale]}</span> */}
        </div>

        {/* Выпадающий список с опциями флагов */}
        <div className="language-dropdown">
          {Object.keys(LANGUAGE_NAMES).map((langCode) => (
            <button
              key={langCode}
              className={`dropdown-item ${locale === langCode ? 'active' : ''}`}
              onClick={() => handleLanguageChange(langCode)}
              aria-label={`Switch to ${LANGUAGE_NAMES[langCode]}`}
            >
              <img
                src={`${basename}images/flags/${langCode}.svg`} // Путь к флагу для каждой опции
                alt={LANGUAGE_NAMES[langCode]}
                className="flag-icon"
              />
              <span className="language-text">{LANGUAGE_NAMES[langCode]}</span> {/* Текст для ясности */}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;