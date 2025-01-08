import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";
import headereng from "../Language/English.json";
import headerdh from "../Language/Dutch.json";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const teamdata =
    i18n.language === "dh"
      ? headerdh
      : i18n.language === "eg"
      ? headereng
      : headerdh;

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);
  return (
    <div className="footer">
      <div className="footer-div">
        <div className="footer-main">
          <div className="footer-content footer-center-image">
            <div className="logo ">
              <img
                src="/imge/footer-icon.png"
                alt="footer-techfirma"
                style={{ width: 140 }}
              />
            </div>
          </div>

          <div className="footer-content" style={{ textAlign: "center" }}>
            <h4>Openingstijden</h4>
            <p className="footer-time">
              Maandag t/m vrijdag:
              <br />
              9:00 – 17:00
              <br />
              Buiten deze tijden kunt u ons mailen.
            </p>
          </div>

          <div className="footer-content">
            <h3>Contact</h3>
            <div className="footer-info">
              <div className="footer-col">
                <MdOutlineMail />
              </div>
              <div className="footer-email-content">
                <a
                  href="mailto: info@verifiedleads.nl"
                  aria-hidden="contact email"
                >
                  info@verifiedleads.nl
                </a>
              </div>
            </div>

            <div className="footer-info">
              <div className="footer-col">
                <MdOutlinePhoneIphone />
              </div>
              <div className="footer-email-content">
                <a href="tel:+31 20 308 68 20" aria-hidden="tel phonenumber">
                  +31 20 308 68 20
                </a>
              </div>
            </div>

            <div className="footer-info">
              <div className="footer-col">
                <IoLogoWhatsapp />
              </div>
              <div className="footer-email-content">
                <a href="tel:+31 6 49 35 01 76" aria-hidden="tel phonenumber">
                  +31 6 49 35 01 76
                </a>
              </div>
            </div>
            <div className="footer-info">
              <div className="footer-col">
                <FaRegMap />
              </div>
              <div className="footer-email-content">
                <a href="#" aria-hidden="true">
                  Papaverweg 34 - unit B100
                  <br />
                  1032KJ Amsterdam
                </a>
              </div>
            </div>
            <div className="footer-info">
              <div className="footer-col">
                <CiViewTimeline />
              </div>
              <div className="footer-email-content">
                <a href="#" aria-hidden="true">
                  KVK : 94442371
                  <br />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-privacy">
          <div className="footer-flex">
            <div className="footer-copyrigth">
              <p>&#169; 2025 Verifiedleads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
