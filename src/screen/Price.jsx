import React, { useEffect, useState } from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import anime from "animejs";
import headereng from '../Language/English.json';
import headerdh from '../Language/Dutch.json';
import { useTranslation } from 'react-i18next';
import i18n from '../Language/i18n';

const Price = () => {
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


    const plansdata = teamdata.price1.price_desc;

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(".price-title h1", {
            duration: 0.5,
            y: 50,
            opacity: 0,
            ease: "power4.out",
        }).from(".card-header", {
            y: -100,
            duration: 1,
            stagger: 0.15,
            delay: 0.2,
            opacity: 0
        })
    }, []);

    return (
        <div className="price-section">
            <div className="price-title">
                <h1>{teamdata.price1.price_title} </h1>
                <p>{teamdata.price1.price_head}
                </p>
            </div>
            <div className="pricing-container">
                {plansdata?.map((plan, index) => (
                    <div className="pricing-card" key={index} >
                        <div className="card-header" >
                            <h3 className='plan-titleh3' style={{ backgroundColor: plan.color }}>

                                {plan.title}

                                <p className='planprice'>{plan.price}</p></h3>

                            <ul className="card-features">
                                {plan.features.map((feature, featureIndex) => (
                                    <div className="pricing-content">
                                        <IoIosCheckmarkCircle className='tick-features' />
                                        <p key={featureIndex}>
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </ul>

                            <div className="card-button">
                                <button >{teamdata.price1.price_button}</button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>

    );
};

export default Price;
