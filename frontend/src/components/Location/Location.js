import React from "react";
import style from "./Location.module.scss";
import { useLanguage } from "../../context/LanguageContext";
import { Row } from "react-bootstrap";

const Location = () => {
  const { translate } = useLanguage();
  return (
    <div className={style.mainDiv}>
      <div className={style.siteSection}>
        <h2>{translate('location.location')}</h2>
        <div>
          <p className={style.description}>{translate("location.name")}</p>
          <p className={style.description}>{translate("location.address")}</p>
        </div>
      </div>
			<p>Hotele w okolicy</p>
      <Row className={style.row}>
        <ul>
          <li>
            <strong>{translate("location.hotel.1.name")}</strong> –{" "}
            {translate("location.hotel.1.addres")}
            {translate("location.hotel.1.description")}
          </li>
          <li>
            <strong>{translate("location.hotel.2.name")}</strong> –{" "}
            {translate("location.hotel.2.addres")}
            {translate("location.hotel.2.description")}
          </li>
          <li>
            <strong>{translate("location.hotel.3.name")}</strong> –{" "}
            {translate("location.hotel.3.addres")}
            {translate("location.hotel.3.description")}
          </li>
          <li>
            <strong>{translate("location.hotel.4.name")}</strong> –{" "}
            {translate("location.hotel.4.addres")}
            {translate("location.hotel.4.description")}
          </li>
        </ul>
      </Row>
    </div>
  );
};

export default Location;
