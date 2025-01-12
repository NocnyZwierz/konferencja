import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import style from "./LanguageSwitcher.module.scss";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={style.container}>
      <div className={style.divImg}>
        <img
          src="/image/anglia.png"
          onClick={() => setLanguage("en")}
          className={style.img}
          alt="Flaga Anglii"
        />
        <img
          src="/image/polska.png"
          onClick={() => setLanguage("pl")}
          className={style.img}
          alt="Flaga Polski"
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
