/** @format */

import { NavLink } from "react-router-dom";
// import CustomDrop from "../CustomDrop/CustomDrop";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import React from "react";

export default function Navbar() {
    const { t } = useTranslation("global");

    // const lang = i18n.language;

    // const [showNavbar, setShowNavbar] = useState(false);

    // const handleShowNavbar = () => setShowNavbar(!showNavbar);
    // console.log(showNavbar);

    // const linkArray = [
    //     {
    //         title: t("navbar.home"),
    //         className: "test_name",
    //         link: "/",
    //         caret: false,
    //         linkList: [],
    //     },

    //     {
    //         title: t("navbar.about_us"),
    //         className: "about-us",
    //         link: null,
    //         caret: true,
    //         linkList: [
    //             { title: t("navbar.au_subtitle_1"), link: "/about-us/introduction-to-wiser-sport/" },
    //             { title: t("navbar.au_subtitle_2"), link: "/about-us/mission-statement-of-wwsc/" },
    //         ],
    //     },

    //     {
    //         title: t("navbar.wiser_sport"),
    //         className: "sport",
    //         link: null,
    //         caret: true,
    //         linkList: [
    //             { title: t("navbar.ws_subtitle_1"), link: "/wiser-sport/the-rules-of-wiser-sport/" },
    //             {
    //                 title: t("navbar.ws_subtitle_2"),
    //                 link: "/wiser-sport/balls-and-basic-equipment-for-wiser-sport/",
    //             },
    //             { title: t("navbar.ws_subtitle_3"), link: "/wiser-sport/dress-code-for-wiser-sport/" },
    //             { title: t("navbar.ws_subtitle_4"), link: "/wiser-sport/glossary-of-terms/" },
    //         ],
    //     },

    //     {
    //         title: t("navbar.play_wiser"),
    //         className: "play",
    //         link: null,
    //         caret: true,
    //         linkList: [
    //             {
    //                 title: t("navbar.pw_subtitle_1"),
    //                 link: "/play-wiser/video-tutorial-play-wiser-ball",
    //             },
    //             {
    //                 title: t("navbar.pw_subtitle_2"),
    //                 link: "/play-wiser/wwsc-demo-video-marching-etiquette-interception",
    //             },
    //             { title: t("navbar.pw_subtitle_3"), link: "/play-wiser/wiser-referee-training" },
    //             {
    //                 title: t("navbar.pw_subtitle_4"),
    //                 link: "/play-wiser/game-recording-sheet-app-download",
    //             },
    //             { title: t("navbar.pw_subtitle_5"), link: "/play-wiser/faqs" },
    //         ],
    //     },

    //     {
    //         title: t("navbar.gallery"),
    //         className: "gallery",
    //         link: null,
    //         caret: true,
    //         linkList: [
    //             {
    //                 title: t("navbar.ga_subtitle_1"),
    //                 link: "/galleries/wwsc-g4-referee-training-albums",
    //             },
    //             {
    //                 title: t("navbar.ga_subtitle_2"),
    //                 link: "/galleries/wwsc-hong-kong-gallery",
    //             },
    //             {
    //                 title: t("navbar.ga_subtitle_3"),
    //                 link: "/galleries/galleries-of-wiser-sport-activities-around-the-world-1",
    //             },
    //             {
    //                 title: t("navbar.ga_subtitle_4"),
    //                 link: "/galleries/galleries-of-wiser-sport-activities-around-the-world-2",
    //             },
    //         ],
    //     },

    //     {
    //         title: t("navbar.wiser_info"),
    //         className: "info",
    //         link: null,
    //         caret: true,
    //         linkList: [
    //             { title: t("navbar.wi_subtitle_1"), link: "/wiser-info/wwsc-inaugural-ceremony" },
    //             { title: t("navbar.wi_subtitle_2"), link: "/wiser-info/wwsc-notices-1" },
    //             { title: t("navbar.wi_subtitle_3"), link: "/wiser-info/wiser-event-news" },
    //             { title: t("navbar.wi_subtitle_4"), link: "/wiser-info/wiser-global-links" },
    //         ],
    //     },
    //     // temporary button access

    //     { title: t("navbar.contact_us"), className: "contact", link: "/contact-us", caret: false, linkList: [] },
    //     {
    //         title: t("navbar.referee_system"),
    //         className: "referee-system",
    //         link: "/referee-home",
    //         caret: false,
    //         linkList: [],
    //     },
    // ];

    return (
        <div wwsc-navbar style={{ backgroundColor: "teal" }}>
            <nav>
                <ul>
               
                    <div className="navbar-container">
                        <li className="top-nav-item">
                            <NavLink to="/" className="nav-link">
                                {t("navbar.home")}
                            </NavLink>
                        </li>
                        {/* ==============ABOUT US ===========*/}
                        <li className="top-nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                href="replace"
                                role="button"
                            >
                                {t("navbar.about_us")}
                            </a>
                            <ul className="dropdown-menu" style={{ backgroundColor: "teal"}}>
                                <li>
                                    <NavLink className="dropdown-item" to="/about-us/introduction-to-wiser-sport/">
                                        {t("navbar.au_subtitle_1")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/about-us/mission-statement-of-wwsc/">
                                        {t("navbar.au_subtitle_2")}
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* =============WISER SPORT========== */}
                        <li class="top-nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                href="replace"
                                role="button"
                            >
                                {t("navbar.wiser_sport")}
                            </a>
                            <ul className="dropdown-menu" style={{ backgroundColor: "teal" }}>
                                <li>
                                    <NavLink className="dropdown-item" to="/wiser-sport/the-rules-of-wiser-sport/">
                                        {t("navbar.ws_subtitle_1")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/wiser-sport/balls-and-basic-equipment-for-wiser-sport/"
                                    >
                                        {t("navbar.ws_subtitle_2")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/wiser-sport/dress-code-for-wiser-sport/">
                                        {t("navbar.ws_subtitle_3")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/wiser-sport/glossary-of-terms/">
                                        {t("navbar.ws_subtitle_4")}
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* =============PLAY WISER========== */}
                        <li class="top-nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                href="replace"
                                role="button"
                            >
                                {t("navbar.play_wiser")}
                            </a>
                            <ul className="dropdown-menu" style={{ backgroundColor: "teal" }}>
                                <li>
                                    <NavLink className="dropdown-item" to="/play-wiser/video-tutorial-play-wiser-ball">
                                        {t("navbar.pw_subtitle_1")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/play-wiser/wwsc-demo-video-marching-etiquette-interception"
                                    >
                                        {t("navbar.pw_subtitle_2")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/play-wiser/wiser-referee-training">
                                        {t("navbar.pw_subtitle_3")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/play-wiser/game-recording-sheet-app-download"
                                    >
                                        {t("navbar.pw_subtitle_4")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/play-wiser/faqs">
                                        {t("navbar.pw_subtitle_5")}
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* =============Gallery========== */}
                        <li class="top-nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                href="replace"
                                role="button"
                            >
                                {t("navbar.gallery")}
                            </a>
                            <ul className="dropdown-menu" style={{ backgroundColor: "teal" }}>
                                <li>
                                    <NavLink className="dropdown-item" to="/galleries/wwsc-g4-referee-training-albums">
                                        {t("navbar.ga_subtitle_1")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/galleries/wwsc-hong-kong-gallery">
                                        {t("navbar.ga_subtitle_2")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/galleries/galleries-of-wiser-sport-activities-around-the-world-1"
                                    >
                                        {t("navbar.ga_subtitle_3")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/galleries/galleries-of-wiser-sport-activities-around-the-world-2"
                                    >
                                        {t("navbar.ga_subtitle_4")}
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* =============WISER INFO========== */}
                        <li class="top-nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                href="replace"
                                role="button"
                            >
                                {t("navbar.wiser_info")}
                            </a>
                            <ul className="dropdown-menu" style={{ backgroundColor: "teal" }}>
                                <li>
                                    <NavLink className="dropdown-item" to="/wiser-info/wwsc-inaugural-ceremony">
                                        {t("navbar.wi_subtitle_1")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/wiser-info/wwsc-notices-1">
                                        {t("navbar.wi_subtitle_2")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/wiser-info/wiser-event-news">
                                        {t("navbar.wi_subtitle_3")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/wiser-info/wiser-global-links">
                                        {t("navbar.wi_subtitle_4")}
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* =============CONTACT US========== */}
                        <li className="top-nav-item">
                            <NavLink className="nav-link" to="/contact-us">
                                {t("navbar.contact_us")}
                            </NavLink>
                        </li>
                        {/* =============REFEREE SYSTEM========== */}
                        <li className="top-nav-item">
                            <NavLink className="nav-link" to="/referee-home">
                                {t("navbar.referee_system")}
                            </NavLink>
                        </li>
                    </div>
                </ul>

            </nav>
        </div>
    );
}
