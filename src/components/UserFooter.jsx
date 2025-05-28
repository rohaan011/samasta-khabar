import React from "react";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import appstoreImg from "../assets/appstore.png";
import googleplayImg from "../assets/googleplay.png";
import "../components/styles/UserFooter.css";

const UserFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="user-footer">
      <div className="footer-columns">
        <div>
          <p className="footer-logo">{t("footer.logo")}</p>
          <div className="stores">
            <img
              src={appstoreImg}
              alt={t("footer.appStoreAlt")}
              className="store-icon"
            />
            <img
              src={googleplayImg}
              alt={t("footer.googlePlayAlt")}
              className="store-icon"
            />
          </div>
        </div>

        <div>
          <a href="#home">{t("footer.home")}</a>
          <a href="#politics">{t("footer.politics")}</a>
          <a href="#business">{t("footer.business")}</a>
          <a href="#sports">{t("footer.sports")}</a>
        </div>

        <div>
          <p>{t("footer.about")}</p>
          <p>{t("footer.advertise")}</p>
          <p>{t("footer.contact")}</p>
          <p>{t("footer.terms")}</p>
        </div>

        <div>
          <p>{t("footer.interact")}</p>
          <div className="socials">
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaYoutube />
            </span>
          </div>
        </div>
      </div>

      <div className="bot-footer">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default UserFooter;
