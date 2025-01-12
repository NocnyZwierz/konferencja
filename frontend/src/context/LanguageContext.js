import React, { createContext, useContext, useState } from "react";
import en from "../locales/en";
import pl from "../locales/pl";

const translations = { en, pl };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translate = (key) => {
    const keys = key.split(".");
    return keys.reduce((acc, curr) => acc[curr], translations[language]);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
