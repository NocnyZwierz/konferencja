import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import style from './ContactForm.module.scss';

const ContactForm = () => {
  const { translate } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(translate('contact.submitButton'));
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h2>{translate('contact.title')}</h2>
      <p>{translate('contact.info')}</p>
      <input
        type="text"
        placeholder={translate('contact.placeholderName')}
        required
        className={style.input}
      />
      <input
        type="email"
        placeholder={translate('contact.placeholderEmail')}
        required
        className={style.input}
      />
      <textarea
        placeholder={translate('contact.placeholderMessage')}
        rows="5"
        required
        className={style.textarea}
      />
      <button type="submit" className={style.button}>
        {translate('contact.submitButton')}
      </button>
    </form>
  );
};

export default ContactForm;
