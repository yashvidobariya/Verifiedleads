import React, { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import headereng from '../Language/English.json';
import headerdh from '../Language/Dutch.json';
import { useTranslation } from 'react-i18next';
import i18n from '../Language/i18n';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [togglemenu, settogglemenu] = useState(false);
    const location = useLocation();


    const teamdata =
        i18n.language === 'dh' ? headerdh : i18n.language === 'eg' ? headereng : headerdh;

    const changeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
        setSelectedLanguage(selectedLanguage);
    };

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage, i18n]);

    const handletogglemenu = () => {
        settogglemenu(!togglemenu);
    };

    const handleLinkClick = () => {
        if (togglemenu) {
            settogglemenu(false);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".header-nav li", {
            y: -100,
            duration: 1,
            stagger: 0.15,
            delay: 0.2,
            opacity: 0
        });
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".header-icon img", {
            y: -100,
            duration: 1,
            stagger: 0.15,
            delay: 0.2,
            opacity: 0
        });
    }, []);

    return (
        <div>
            <div className="main-header">
                <div className="header-section">
                    <div className="header-icon">
                        <img src='./imge/header-icon.jpg' alt="Header Icon" />
                    </div>
                    <div className={`header-nav ${togglemenu ? "active" : ""}`}>
                        <li>
                            <Link to="/"
                                className={location.pathname === "/" ? "nav-active" : ""}
                                onClick={handleLinkClick}
                            >
                                {teamdata.header.home}
                            </Link>
                        </li>
                        <li>
                            <Link to="/price"
                                className={location.pathname === "/price" ? "nav-active" : ""}
                                onClick={handleLinkClick}
                            >
                                {teamdata.header.price}
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact"
                                className={location.pathname === "/contact" ? "nav-active" : ""}
                                onClick={handleLinkClick}
                            >
                                {teamdata.header.contact}
                            </Link>
                        </li>

                        <div className='langauge-header'>
                            <select className='language-dropdown' value={selectedLanguage} onChange={changeLanguage} aria-label='Select Option'>
                                <option value='dh'>Dutch</option>
                                <option value='eg'>English</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="toggle-menu">
                    {togglemenu ? (
                        <RxCross2 onClick={handletogglemenu} />
                    ) : (
                        <IoMenu onClick={handletogglemenu} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
