import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useLanguage } from '../../context/LanguageContext';
import style from './Info.module.scss'

const Info = () => {

    const [index, setIndex] = useState(0);
    const { translate } = useLanguage();

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return (
        <div className={style.mainDiv}>
            <div className={style.siteSection}>
              <h2>{translate('info.info')}</h2>
              <p className={style.description}>{translate('info.topic')}</p>
            </div>
            <p>{translate('info.text')}</p>
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item className={style.sliderImg}>
                    <img src='./image/exemple/1.png' alt='exemple1'/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src='./image/exemple/2.png' alt='exemple2'/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src='./image/exemple/3.png' alt='exemple3'/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Info;