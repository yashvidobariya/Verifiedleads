import React, { useEffect, useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import headereng from '../Language/English.json';
import headerdh from '../Language/Dutch.json';
import { useTranslation } from 'react-i18next';
import i18n from '../Language/i18n';

const Footer = () => {
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
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">

                    <div className="footer-icons">
                        <img src='./imge/footer-icon.png' />
                    </div>

                    <ul className="footer-nav">
                        <li><a href="#"> {teamdata.footer.f_home}</a></li>
                        <li><a href="#"> {teamdata.footer.f_contact}</a></li>
                        {/* <li><a href="#"> {teamdata.footer.f_login}</a></li> */}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2024 De Lead Centrale | Webdesign door webbureau ditisABC
                </p>
            </div>
        </footer>
    );
};

export default Footer;
