import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import style from './Header.module.scss';

const Header = () => {
  const { translate } = useLanguage();

  return (
    <header className={style.header}>
    <h1>{translate('header.title')}</h1>
    <h2>{translate('header.subtitle')}</h2>
    </header>
  );
};

export default Header;