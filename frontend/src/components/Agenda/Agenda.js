import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import style from "./Agenda.module.scss";
import Day_One from "../Day_One/Day_One";
import Day_Two from "../Day_Two/Day_Two";

const Agenda = () => {
  const { translate } = useLanguage();
  const [day, setDay] = useState("day1");

  return (
    <div className={style.mainDiv}>
      <div className={style.siteSection}>
        <h2>{translate("agenda.title")}</h2>
        <p className={style.description}>{translate("agenda.info")}</p>
      </div>
      <div className={style.buttonAgenda}>
        <button
          className={`${style.ctaButton} ${
            day === "day1" ? style.activeButton : ""
          }`}
          onClick={() => setDay("day1")}
        >
          {translate("agenda.button_One")}
        </button>
        <button
          className={`${style.ctaButton} ${
            day === "day2" ? style.activeButton : ""
          }`}
          onClick={() => setDay("day2")}
        >
          {translate("agenda.button_Two")}
        </button>
      </div>
      {day === "day1" ? <Day_One /> : <Day_Two />}
    </div>
  );
};

export default Agenda;
