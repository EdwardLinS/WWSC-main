/** @format */

import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
    const [language, setLanguage] = useState("en");
    const { t, i18n } = useTranslation("global");

    const handleChangeLanguage = (e) => {
        const lang = e.target.value;
        console.log(lang);
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };
    const path = useLocation().pathname;
    const display = !(path.slice(1).split("-")[0] === "referee");

    return (
        <>
            <div className="header-container">
                <div className="top-content">
                    <div>
                        <span className="slogan">{t("header.slogan")}</span>
                    </div>
                    <div className="header-text">
                        <span className="w3-text-gray">{t("header.language_select")}:</span>
                        <select
                            onChange={handleChangeLanguage}
                            value={language}
                            className="form-select form-select-sm"
                            aria-label={t("header.select_language")}
                            style={{ width: "140px", backgroundColor: "white", color: "#073b3a", padding: "5px" }}
                        >
                            <option selected value="en">
                                English
                            </option>
                            <option value="zhHant">中文繁體</option>
                            <option value="zhHans">中文简体</option>
                        </select>
                        <button className="btn-signup">
                            <span>{t("header.signup")}</span>
                        </button>
                        <Link to="/referee-home">
                            <button className="btn-login" style={{ "vertical-align": "middle" }}>
                                <span>{t("header.login")}</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {display && (
                    <div className="bottom-content">
                        <Link to="/">
                            <img className="logo" src="/WWSC-logo.png" alt="logo" />
                        </Link>

                        <div className="title-container">
                            <h className="title">{t("header.title")}</h>
                            <span>{t("header.subtitle")}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
