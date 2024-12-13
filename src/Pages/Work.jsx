import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import headereng from '../Language/English.json';
import headerdh from '../Language/Dutch.json';
import { useTranslation } from 'react-i18next';
import i18n from '../Language/i18n';

const Work = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const teamdata =
    i18n.language === 'dh' ? headerdh : i18n.language === 'eg' ? headereng : headerdh;

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage.toLowerCase());
    setSelectedLanguage(selectedLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top center",
        end: "bottom center",
        scrub: true,

      },
    });

    tl.from(".timeline-item", {
      y: -100,
      duration: 1,
      stagger: 0.15,
      delay: 0.2,
      opacity: 0,
    });
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-circle">  <img src="./imge/1.png" /></div>
          <h2> {teamdata.work.work_title1}</h2>
          <div className="timeline-content">
            <p> {teamdata.work.work_des1}</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-circle">
            <img src="./imge/2.png" />
          </div>
          <h2> {teamdata.work.work_title2}</h2>
          <div className="timeline-content">
            <p> {teamdata.work.work_des2}</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-circle">
            <img src="./imge/3.png" />
          </div>
          <h2> {teamdata.work.work_title3}</h2>
          <div className="timeline-content">
            <p> {teamdata.work.work_des3}</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-circle">
            <img src="./imge/4.png" />
          </div>
          <h2> {teamdata.work.work_title4}</h2>
          <div className="timeline-content">
            <p> {teamdata.work.work_des4}</p>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-circle">
            <img src="./imge/5.png" />
          </div>
          <h2> {teamdata.work.work_title5}</h2>
          <div className="timeline-content">
            <p>  {teamdata.work.work_des5}</p>
          </div>
        </div>      </div>
    </div>
  );
};

export default Work;
