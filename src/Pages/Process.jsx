import { useGSAP } from '@gsap/react';
import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import headereng from '../Language/English.json';
import headerdh from '../Language/Dutch.json';
import { useTranslation } from 'react-i18next';
import i18n from '../Language/i18n';

const Process = () => {
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
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.process-content',
    //             start: 'top 40%',
    //             end: 'end 10%',
    //             scrub: true,
    //         },
    //     });

    //     tl.from('.process-content', {
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 0.1,
    //     });
    // }, []);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".process-flex",
                start: "top 80%",
                end: "bottom 20%",

            },
        });

        tl.from("process-img img", {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "power4.out",
        })
            .from(".process-content h1", {
                duration: 1,
                y: -50,
                opacity: 0,
                ease: "power4.out",
            })
            .from(".process-content p", {
                duration: 2,
                y: -150,
                opacity: 0,
                ease: "power4.out",
            })
        // .from("#facility-animate", {
        //     duration: 1,
        //     x: -50,
        //     opacity: 0,
        //     ease: "power4.out",
        // });
    }, []);


    return (
        <div className='process-main'>
            <div className="process-section">
                <div className="process-flex">
                    <div className="process-img">
                        <img src='./imge/power.jpg' />
                    </div>
                    <div className="process-content">
                        <h1>{teamdata.process.process_first}</h1>
                        <p>{teamdata.process.process_p1}</p>
                        <p>{teamdata.process.process_p2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
