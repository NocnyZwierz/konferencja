import React from "react";
import style from "./Day_One.module.scss";
import { useLanguage } from "../../context/LanguageContext";

const Day_One = () => {
  const { translate } = useLanguage();
  return (
    <div className={style.dayOne}>
      <ul className={style.schedule}>
        <li>
          <strong>9:00 - 9:30</strong>
          <div>{translate("day_one.welcome")}</div>
        </li>
        <li>
          <strong>9:30 - 10:15</strong>
          <div>
            {translate("day_one.topic1")}
            <p>{translate("day_one.speaker1")}</p>
            <p>{translate("day_one.speaker1p")}</p>
          </div>
        </li>
        <li>
          <strong>10:15 - 10:45</strong>
          <div>{translate("day_one.coffe")}</div>
        </li>
        <li>
          <strong>10:45 - 12:00</strong>
          <div>
            {translate("day_one.topic2")}
            <p>{translate("day_one.speaker2")}</p>
            <p>{translate("day_one.speaker2p")}</p>
          </div>
        </li>
        <li>
          <strong>12:00 - 13:00</strong>
          <div>{translate("day_one.lunch")}</div>
        </li>
        <li>
          <strong>13:00 - 14:30</strong>
          <div>
            {translate("day_one.topic3")}
            <p>{translate("day_one.speaker3")}</p>
            <p>{translate("day_one.speaker3p")}</p>
          </div>
        </li>
        <li>
          <strong>14:30 - 15:00</strong>
          <div>{translate("day_one.afternoon")}</div>
        </li>
        <li>
          <strong>15:00 - 16:30</strong>
          <div>
            {translate("day_one.topic4")}
            <p>{translate("day_one.speaker4")}</p>
            <p>{translate("day_one.speaker4p")}.</p>
          </div>
        </li>
        <li>
          <strong>16:30 - 17:00</strong>
          <div>{translate("day_one.closing")}</div>
        </li>
      </ul>
    </div>
  );
};

export default Day_One;
