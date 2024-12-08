import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import style from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={style.container}>
    <button
        onClick={() => setLanguage('en')}
        className={language === 'en' ? style.activeButton : style.button}
    >
        English
    </button>
    <button
        onClick={() => setLanguage('pl')}
        className={language === 'pl' ? style.activeButton : style.button}
    >
        Polski
    </button>
    </div>
    );
};

export default LanguageSwitcher;