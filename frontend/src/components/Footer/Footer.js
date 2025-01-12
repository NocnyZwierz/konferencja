import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import style from './Footer.module.scss';


const Footer = () => {
  const { translate } = useLanguage();

  return (
    <footer className={style.mainFooter}>
        <p>{translate('footer')}</p>
    </footer>
  );
};

export default Footer;