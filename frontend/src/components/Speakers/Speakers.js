import React, { useState, useEffect } from "react";
import style from "./Speakers.module.scss";
import { useLanguage } from "../../context/LanguageContext";

const Speakers = () => {
  const { translate } = useLanguage();
  const [visibleGroup, setVisibleGroup] = useState(0);

  const speakersData = [
    {
      id: 1,
      name: "Michael Carter",
      title: translate("speakers.id.1.title"),
      bio: translate("speakers.id.1.bio"),
      photo: "./image/speakers/speakers.jpg",
    },
    {
      id: 2,
      name: "Katarzyna Nowak",
      title: translate("speakers.id.2.title"),
      bio: translate("speakers.id.2.bio"),
      photo: "./image/speakers/speakers.jpg",
    },
    {
      id: 3,
      name: "James Miller",
      title: translate("speakers.id.3.title"),
      bio: translate("speakers.id.3.bio"),
      photo: "./image/speakers/speakers.jpg",
    },
    {
      id: 4,
      name: "Zofia Wiśniewska",
      title: translate("speakers.id.4.title"),
      bio: translate("speakers.id.4.bio"),
      photo: "./image/speakers/speakers.jpg",
    },
    {
      id: 5,
      name: "Sophia Brown",
      title: translate("speakers.id.5.title"),
      bio: translate("speakers.id.5.bio"),
      photo: "./image/speakers/speakers2.jpg",
    },
    {
      id: 6,
      name: "Barbara Zielińska",
      title: translate("speakers.id.6.title"),
      bio: translate("speakers.id.6.bio"),
      photo: "./image/speakers/speakers2.jpg",
    },
    {
      id: 7,
      name: "Adam Kowalski",
      title: translate("speakers.id.7.title"),
      bio: translate("speakers.id.7.bio"),
      photo: "./image/speakers/speakers2.jpg",
    },
    {
      id: 8,
      name: "Piotr Grabowski",
      title: translate("speakers.id.8.title"),
      bio: translate("speakers.id.8.bio"),
      photo: "./image/speakers/speakers2.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleGroup((prevGroup) => (prevGroup === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const groupSize = 4;
  const currentGroup = speakersData.slice(
    visibleGroup * groupSize,
    (visibleGroup + 1) * groupSize
  );

  return (
    <div className={style.mainDiv}>
      <div class={style.siteSection}>
        <h2>{translate("speakers.title")}</h2>
        <p className={style.description}>{translate("speakers.info")}</p>
      </div>

      <div className={style.speakersList}>
        {currentGroup.map((speaker) => (
          <div
            key={speaker.id}
            className={`${style.speakerCard} ${
              speaker.id % 2 === 0 ? style.mirrored : ""
            }`}
          >
            <img
              src={speaker.photo}
              alt={speaker.name}
              className={style.speakerPhoto}
            />
            <div className={style.content}>
              <h2>{speaker.name}</h2>
              <h3>{speaker.title}</h3>
              <p>{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
