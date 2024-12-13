import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import scrollTrigger from "gsap/ScrollTrigger";
import headereng from '../Language/English.json';
import headerdh from '../Language/Dutch.json';
import { useTranslation } from 'react-i18next';
import i18n from '../Language/i18n';
const ContactUs = () => {
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
        gsap.registerPlugin(scrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-info",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        });

        tl.from(".contact-info h1", {
            duration: 0.9,
            yPercent: 100,
            opacity: 0,
            ease: "power4.out",
        })
            .from(".contact-info p", {
                duration: 0.5,
                y: 50,
                opacity: 0,
                ease: "power4.out",
            })
            .from(".contact-form", {
                duration: 1,
                x: -50,
                opacity: 0,
                ease: "power4.out",
            })
        // .from(".submit-button", {
        //     duration: 1,
        //     x: 0,
        //     opacity: 0,
        //     ease: "power4.out",
        // });

    }, []);

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>  {teamdata.contact.contact_title}</h2>
                <form>
                    <div className="form-group">
                        <label>{teamdata.contact.input_1}</label>
                        <input type="text" placeholder={`${teamdata.contact.placeholder1}`} />
                    </div>
                    <div className="form-group">
                        <label>{teamdata.contact.input_2}</label>
                        <input type="email" placeholder={`${teamdata.contact.placeholder2}`} />
                    </div>
                    <div className="form-group">
                        <label>{teamdata.contact.input_3}</label>
                        <input type="email" placeholder={`${teamdata.contact.placeholder3}`} />
                    </div>
                    <button type="submit" className="submit-button">
                        {teamdata.contact.form_button}
                    </button>
                </form>
            </div>
            <div className="contact-info">
                <h1>
                    <span> {teamdata.contact.contact}</span><br /><h5>  {teamdata.contact.us}</h5>
                </h1>
                <p> {teamdata.contact.contact_info1}<br />  {teamdata.contact.contact_info2}<br />  {teamdata.contact.contact_info3}</p>
            </div>
        </div>
    );
};

export default ContactUs;
