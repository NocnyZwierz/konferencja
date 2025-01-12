import React from "react";
import { LanguageProvider } from "./context/LanguageContext.js";
import Header from "./components/Header/Header.js";
import ContactForm from "./components/ContactForm/ContactForm";
import style from "./App.module.scss";
import Info from "./components/Info/Info.js";
import Agenda from "./components/Agenda/Agenda.js";
import SocialMedia from "./components/SocialMedia/SocialMedia.js";
import Location from "./components/Location/Location.js";
import Speakers from "./components/Speakers/Speakers.js";
import Sponsors from "./components/Sponsors/Sponsors.js";
import Footer from "./components/Footer/Footer.js";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher.js";

const App = () => {
  return (
    <div className={style.root}>
      <LanguageProvider>
        <LanguageSwitcher />
        <Header />
        <Speakers />
        <Agenda />
        <Info />
        <Sponsors />
        <Location />
        <ContactForm />
        <SocialMedia />
        <Footer />
      </LanguageProvider>
    </div>
  );
};

export default App;
