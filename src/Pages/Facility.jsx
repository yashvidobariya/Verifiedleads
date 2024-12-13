import React, { useEffect, useState } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import headereng from '../Language/English.json';
import headerdh from '../Language/Dutch.json';
import { useTranslation } from 'react-i18next';
import i18n from '../Language/i18n';

const Facility = () => {
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
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".facility-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });

        tl.from("#facility-color", {
            duration: 0.9,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
        })
            .from("#facility-color h1", {
                duration: 0.5,
                y: 50,
                opacity: 0,
                ease: "power4.out",
            })
            .from("#facility-color p", {
                duration: 0.5,
                y: 50,
                opacity: 0,
                ease: "power4.out",
            })
            .from("#facility-animate", {
                duration: 1,
                x: -50,
                opacity: 0,
                ease: "power4.out",
            });
    }, []);


    return (
        <div className='facility-main'>
            <div className="facility-section">
                <div className="facility-title">
                    <h1> {teamdata.facility.facility}</h1>
                </div>
                <div className="facility-content">
                    <div className="facility-card">
                        <div className="facility-subcontent" id="facility-animate">
                            <h1>{teamdata.facility.fac_1}</h1>
                            <p>{teamdata.facility.fac_des1}</p>
                        </div>

                        <div className="facility-subcontent" id="facility-color">
                            <h1>{teamdata.facility.fac_2}</h1>
                            <p>{teamdata.facility.fac_des2}</p>
                        </div>
                    </div>
                    <div className="facility-card">
                        <div className="facility-subcontent" id="facility-color">
                            <h1>{teamdata.facility.fac_3}</h1>
                            <p>{teamdata.facility.fac_des3}</p>
                        </div>

                        <div className="facility-subcontent" id="facility-animate">
                            <h1>{teamdata.facility.fac_4}</h1>
                            <p>{teamdata.facility.fac_des4}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility