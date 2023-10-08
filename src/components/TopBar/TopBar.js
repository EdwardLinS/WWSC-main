/** @format */

import "./TopBar.css";

import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TopBar() {
    const [language, setLanguage] = useState("en");
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (e) => {
        const lang = e.target.value;
        console.log(lang);
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <div className="top-content">
            <div className="header-text">
                <span className="global-icon">
                    <i className="bi bi-globe"></i>
                </span>
                <select
                    onChange={handleChangeLanguage}
                    value={language}
                    className="form-select"
                    aria-label={t("header.select_language")}
                    style={{ width: "140px", backgroundColor: "white", color: "#073b3a", padding: "5px" }}
                >
                    <option selected value="en">
                        English
                    </option>
                    <option value="zh-TW">中文繁體</option>
                    <option value="zh-CN">中文简体</option>
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
    );
}
