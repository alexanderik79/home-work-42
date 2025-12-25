// src/contexts/LocalizationContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Импортируем файлы с переводами
import enTranslations from '../localization/en.json';
import ukTranslations from '../localization/uk.json';
import deTranslations from '../localization/de.json';
import plTranslations from '../localization/pl.json';
import nlTranslations from '../localization/nl.json';

// Объект, который будет содержать все загруженные переводы по языковым кодам
const allTranslations = {
  en: enTranslations,
  uk: ukTranslations,
  de: deTranslations,
  pl: plTranslations,
  nl: nlTranslations,
};

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  // Инициализация состояния языка:
  // 1. Пытаемся получить язык из localStorage.
  // 2. Если в localStorage нет, используем язык браузера (если поддерживается и есть перевод).
  // 3. По умолчанию используем 'en'.
  const [locale, setLocale] = useState(() => {
    const savedLocale = localStorage.getItem('language');
    if (savedLocale && allTranslations[savedLocale]) {
      return savedLocale;
    }
    const browserLanguage = navigator.language.split('-')[0]; // Получаем "en" из "en-US"
    if (allTranslations[browserLanguage]) {
      return browserLanguage;
    }
    return 'en'; // Язык по умолчанию
  });

  // Эффект для сохранения выбранного языка в localStorage при его изменении
  useEffect(() => {
    localStorage.setItem('language', locale);
  }, [locale]); // Срабатывает при каждом изменении 'locale'

  // Функция для получения перевода по ключу
  // Она также может принимать объект с плейсхолдерами (например, { brand: 'BMW' })
  const t = (key, replacements = {}) => {
    const currentTranslations = allTranslations[locale];
    let translatedText = currentTranslations[key] || key; // Если перевод не найден, возвращаем сам ключ

    // Заменяем плейсхолдеры, если они есть
    for (const placeholder in replacements) {
      if (Object.prototype.hasOwnProperty.call(replacements, placeholder)) {
        const regex = new RegExp(`{${placeholder}}`, 'g');
        translatedText = translatedText.replace(regex, replacements[placeholder]);
      }
    }

    return translatedText;
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// Хук для удобного использования контекста перевода в компонентах
export const useTranslation = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LocalizationProvider');
  }
  return context;
};