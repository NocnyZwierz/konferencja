import React from 'react';
import { LanguageProvider } from './context/LanguageContext.js';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher.js';
import Header from './components/Header/Header.js';
import ContactForm from './components/ContactForm/ContactForm';


const App = () => {
  return (
    <LanguageProvider>
      <LanguageSwitcher/>
      <Header/>
      <ContactForm/>
    </LanguageProvider>
  );
};

export default App;