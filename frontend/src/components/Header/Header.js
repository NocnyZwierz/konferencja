import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import style from "./Header.module.scss";

const Header = () => {
  const { translate } = useLanguage();

  return (
    <header className={style.header}>
      <span>{translate("header.title")}</span>
      <h1>{translate("header.subtitle")}</h1>
      <span>{translate("header.when")}</span>
      <button className={style.ctaButton}>{translate("header.button")}</button>
    </header>
  );
};

export default Header;
