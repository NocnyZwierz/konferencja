import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import style from './Sponsors.module.scss';

const Sponsors = () => {
    const { translate } = useLanguage();

    const sponsors = [
        { name: 'IBM', logo: '/image/logos/logo_1.png' },
        { name: 'Evernote', logo: '/image/logos/logo_2.png' },
        { name: 'Nike', logo: '/image/logos/logo_3.png' },
        { name: 'Mailchimp', logo: '/image/logos/logo_4.png' },
    ];

    return (
        <div className={style.mainDiv}>
            <div className={style.siteSection}>
              <h2>{translate('sponsors.sponsors')}</h2>
              <p className={style.description}>{translate('sponsors.text')}</p>
            </div>
            <div className={style.sponsorLogos}>
                {sponsors.map((sponsor) => (
                    <div key={sponsor.name} className={style.sponsor}>
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className={style.sponsorLogo}
                        />
                    </div>
                ))}
            </div>
            <button className={style.ctaButton}>{translate('sponsors.button')}</button>
        </div>
    );
};

export default Sponsors;