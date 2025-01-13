import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import style from "./ContactForm.module.scss";
import { Row, Col } from "react-bootstrap";

const ContactForm = () => {
  const { translate } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Name: e.target[0].value,
      Affiliation: e.target[1].value,
      AcademicTitle: e.target[2].value,
      Abstract: e.target[3].value,
      Email: e.target[4].value,
      Number: parseInt(e.target[5].value, 10),
    };

    try {
      const respons = await fetch("http://localhost:3300/konferencja", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (respons.ok) {
        alert("Formularz został wysłany!");
        e.target.reset();
      } else {
        alert("Nie udało się wysłać formularza!");
      }
    } catch (error) {
      console.error("Dane nie wysłane", error);
      alert("Nie udało się wysłać danych.");
    }
  };

  return (
    <div className={style.mainDiv}>
      <div className={style.siteSection}>
        <h2>{translate("agenda.title")}</h2>
        <p className={style.description}>{translate("agenda.info")}</p>
      </div>
      <Row className={style.content}>
        <Col className={style.col1}>
          <div>
            <h1>{translate("header.title")}</h1>
            <h2 className={style.innerH}>{translate("header.subtitle")}</h2>
          </div>
          <div className={style.info}>
            <p>{translate("header.where")}</p>
            <p>{translate("header.when")}</p>
          </div>
          <div>
            <h3>{translate("contact.contact")}</h3>
            <p>
              Email: <a href="contact@example.com">contact@example.com</a>
            </p>
            <p>
              {translate("contact.phone")}{" "}
              <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
          </div>
        </Col>
        <Col>
          <form onSubmit={handleSubmit} className={style.form}>
            <h2>{translate("contact.title")}</h2>
            <p>{translate("contact.info")}</p>
            <input
              type="text"
              placeholder={translate("contact.placeholderName")}
              required
              className={style.input}
            />
            <input
              type="text"
              placeholder={translate("contact.placeholderAffiliation")}
              className={style.input}
            />
            <input
              type="text"
              placeholder={translate("contact.placeholderAcademicTitle")}
              className={style.input}
            />
            <textarea
              placeholder={translate("contact.placeholderAbstract")}
              rows="5"
              maxLength="200"
              className={style.textarea}
            />
            <input
              type="email"
              placeholder={translate("contact.placeholderEmail")}
              required
              className={style.input}
            />
            <input
              type="tel"
              placeholder={translate("contact.placeholderNumber")}
              required
              pattern="[0-9]{9}"
              className={style.input}
            />
            <button type="submit" className={style.button}>
              {translate("contact.submitButton")}
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
