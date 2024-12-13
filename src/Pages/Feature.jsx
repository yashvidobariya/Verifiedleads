import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SlEnergy } from "react-icons/sl";
import featureData from "../data/Facility.json";
import { useGSAP } from "@gsap/react";
import { FaChargingStation } from "react-icons/fa";
import { GiSolarPower } from "react-icons/gi";
import { GiBatteries } from "react-icons/gi";
import headereng from '../Language/English.json';
import headerdh from '../Language/Dutch.json';
import { useTranslation } from 'react-i18next';
import i18n from '../Language/i18n';

const iconMap = {
    SlEnergy: <SlEnergy />,
    FaChargingStation: <FaChargingStation />,
    GiSolarPower: <GiSolarPower />,
    GiBatteries: <GiBatteries />
};

const WhyLeadCentral = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const teamdata =
        i18n.language === 'dh' ? headerdh : i18n.language === 'eg' ? headereng : headerdh;

    const featuredata = teamdata.feature.feature_data;

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
                trigger: ".why-lead-central",
                scrub: true,
            },
        });

        tl.from(".features", {
            opacity: 0,
            scale: 0,
            duration: 1,
        });

    }, []);


    return (
        <div className="why-lead-central">
            <h2>{teamdata.feature.title}</h2>
            <div className="features">
                {featuredata.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{iconMap[feature.icon]}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.points}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default WhyLeadCentral;
