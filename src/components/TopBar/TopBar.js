/** @format */
import React from "react";
import { useState, useEffect, useRef } from "react";

// import style css file
import "./TopBar.css";

import { Link } from "react-router-dom";

// import UseTranslation hook
import { useTranslation } from "react-i18next";

//Create Topbar component
export default function TopBar() {
    const languages = [
        {
            code: "en",
            name: "English",
        },
        {
            code: "zh-TW",
            name: "繁體中文",
        },
        {
            code: "zh-CN",
            name: "简体中文",
        },
    ];

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    const { t, i18n } = useTranslation();

    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <div className="top-bar-title">
                    <Link to="/">
                        <img className="wwsc-small-logo" src="/WWSC-logo.png" alt="wwsc-small-logo" />
                    </Link>
                    <h2 style={{ color: "teal" }}>WWSC</h2>
                </div>
            </div>
            <div className="top-bar-right">
                <div className="lng-tooltip">{t("topbar.tool_tip")}</div>
                <div className="lng-container" ref={menuRef}>
                    <div
                        className="select-container"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        <button className="lng-icon" type="button" style={{ color: "teal", fontSize: "1.6rem" }}>
                            <i class="bi bi-translate"></i>
                        </button>
                    </div>
                    <div className={`lng-dropdown-menu ${open ? "active" : "inactive"}`}>
                        <ul>
                            {languages.map(({ code, name }) => (
                                <li
                                    className="lng-dropdown-item"
                                    key={code}
                                    onClick={() => {
                                        i18n.changeLanguage(code);
                                        setOpen(!open);
                                    }}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="btns-container">
                    <button className="btn-signup">
                        <div className="btn-signup-content">
                            <span classname="btn-signup-icon">
                                <i class="bi bi-pencil-square" style={{ fontSize: "1.2rem" }}></i>
                            </span>
                            <span classname="btn-signup-text">{t("topbar.signup")}</span>
                        </div>
                    </button>

                    <Link to="/referee-home">
                        <button className="btn-login">
                            <div className="btn-login-content">
                                <span classname="btn-login-icon">
                                    <i class="bi bi-person-badge-fill" style={{ fontSize: "1.2rem" }}></i>
                                </span>
                                <span classname="btn-login-text"> {t("topbar.login")}</span>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
