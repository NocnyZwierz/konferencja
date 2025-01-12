import React from "react";
import style from "./Day_Two.module.scss";
import { useLanguage } from "../../context/LanguageContext";

const Day_Two = () => {
  const { translate } = useLanguage();
  return (
    <div className={style.dayTwo}>
      <ul className={style.schedule}>
        <li>
          <strong>9:00 - 9:30</strong>
          <div>{translate("day_two.welcome")}</div>
        </li>
        <li>
          <strong>9:30 - 10:15</strong>
          <div>
            {translate("day_two.topic1")}
            <p>{translate("day_two.speaker1")}</p>
            <p>{translate("day_two.speaker1p")}</p>
          </div>
        </li>
        <li>
          <strong>10:15 - 10:45</strong>
          <div>{translate("day_two.coffe")}</div>
        </li>
        <li>
          <strong>10:45 - 12:00</strong>
          <div>
            {translate("day_two.topic2")}
            <p>{translate("day_two.speaker2")}</p>
            <p>{translate("day_two.speaker2p")}</p>
          </div>
        </li>
        <li>
          <strong>12:00 - 13:00</strong>
          <div>{translate("day_two.lunch")}</div>
        </li>
        <li>
          <strong>13:00 - 14:30</strong>
          <div>
            {translate("day_two.topic3")}
            <p>{translate("day_two.speaker3")}</p>
            <p>{translate("day_two.speaker3p")}</p>
          </div>
        </li>
        <li>
          <strong>14:30 - 15:00</strong>
          <div>{translate("day_two.afternoon")}</div>
        </li>
        <li>
          <strong>15:00 - 16:30</strong>
          <div>
            {translate("day_two.topic4")}
            <p>{translate("day_two.speaker4")}</p>
            <p>{translate("day_two.speaker4p")}</p>
          </div>
        </li>
        <li>
          <strong>16:30 - 17:00</strong>
          <div>{translate("day_two.closing")}</div>
        </li>
      </ul>
    </div>
  );
};

export default Day_Two;
