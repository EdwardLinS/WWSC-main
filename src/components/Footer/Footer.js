/** @format */

import "./Footer.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Footer() {
    
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;
    // console.log(i18n.language);
    
    const linkArray = [
        { title: t("footer.home"), link: "/" },
        { title: t("footer.about_us"), link: "/about-us" },
        { title: t("footer.wiser_sport"), link: "/wiser-sport" },
        { title: t("footer.play_wiser"), link: "/play-wiser" },
        { title: t("footer.private_policy"), link: "/wwsc-privacy-policy" },
        { title: t("footer.terms_conditions"), link: "/terms-conditions" },
        { title: t("footer.contact_us"), link: "/contact-us" },
    ];

    return (
        <div className="footer w3-theme-d4">
            <div>
                <ul class="social-icon">
                    <li class="social-icon__item">
                        <a class="social-icon__link" href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li class="social-icon__item">
                        <a class="social-icon__link" href="#">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                    <li class="social-icon__item">
                        <a class="social-icon__link" href="#">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                    <li class="social-icon__item">
                        <a class="social-icon__link" href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
            <hr></hr>
            <div className="links">
                {linkArray.map((link) => (
                    <div className="link">
                        <p className="footer-link">
                            <NavLink to={link.link} style={{ color: "white", paddingRight: "10px" }}>
                                {link.title}
                            </NavLink>
                        </p>
                    </div>
                ))}
            </div>
            <hr></hr>
            <div className="copyright">
                <span className="copyright-text">{t("footer.copy_rights")}</span>
            </div>
        </div>
    );
}
