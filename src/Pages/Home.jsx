import React, { useEffect, useState } from 'react';
import { color, delay, motion } from "framer-motion";
import { Wave } from 'react-animated-text';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Process from './Process';
import Feature from './Feature';
import Work from './Work'
import Facility from './Facility';
import Contact from './Contact';
import anime from 'animejs/lib/anime.es.js';
import headereng from '../Language/English.json';
import headerdh from '../Language/Dutch.json';
import { useTranslation } from 'react-i18next';
import i18n from '../Language/i18n';

const Home = () => {
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

    // useGSAP(() => {
    //     const tl = gsap.timeline();
    //     tl.from("#home-contenth1", {
    //         x: -100,
    //         duration: 1,
    //         stagger: 0.1,
    //         opacity: 0
    //     });
    // }, []);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".home-bg img", {
            duration: 2,
            yPercent: -20,
            opacity: 0,
            ease: "power4.out",
        }).from("#home-contentp", {
            duration: 0.5,
            x: -50,
            opacity: 0,
            ease: "power4.out",
        })
            .from(".home-button", {
                duration: 0.5,
                y: 50,
                opacity: 0,
                ease: "power4.out",
            })

    }, []);

    useGSAP(() => {
        anime.timeline({ loop: true })
            .add({
                targets: '#home-contenth1',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: 1000
            }).add({
                targets: '#home-contenth1',
                scaleY: [1, 0],
                color: 'red',
                opacity: [1, 0],
                easing: "easeOutExpo",
                duration: 1000,
                delay: 1000
            })
    }, []);


    return (
        <>
            <div className='home-main'>
                <div className="home-section">
                    <div className="home-flex">
                        <div className="home-content"  >
                            <p id='home-contenth1'>     {teamdata.home.home_first} <br /> {teamdata.home.home_first_sub}</p>
                            <p id='home-contentp'> {teamdata.home.home_sec}</p>
                            <div className="home-button">
                                <button className="signup-btn"> {teamdata.home.home_button1}</button>
                                <button className="login-btn"> {teamdata.home.home_button2}</button>
                            </div>
                        </div>

                        <div

                            className="home-bg"
                        >
                            <img src='./imge/home-bg.gif' alt="background" />
                        </div>

                    </div>
                </div>

            </div>
            <Process />
            <Feature />
            <Work />
            <Facility />
            <Contact />
        </>
    );
}

export default Home;
