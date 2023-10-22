/** @format */

import { Link} from "react-router-dom";
import "./Header.css";
// import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
// import TopBar from "../TopBar/TopBar";

export default function Header() {
    // const [language, setLanguage] = useState("en");
    const { t } = useTranslation();

    // const handleChangeLanguage = (e) => {
    //     const lang = e.target.value;
    //     console.log(lang);
    //     setLanguage(lang);
    //     i18n.changeLanguage(lang);
    // };
    const path = useLocation().pathname;
    const display = !(path.slice(1).split("-")[0] === "referee");

    return (
        <>
            
            
            <div className="header-container">
                {display && (
                    <div className="header-content">
                        <Link to="/">
                            <img className="logo" src="/WWSC-logo.png" alt="logo" />
                        </Link>

                        <div className="title-container">
                            <div>
                                <span className="slogan">{t("header.slogan")}</span>
                            </div>
                            <h className="title">{t("header.title")}</h>
                            <span>{t("header.subtitle")}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
