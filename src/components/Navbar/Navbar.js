/** @format */

import { NavLink } from "react-router-dom";
import CustomDrop from "../CustomDrop/CustomDrop";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t} = useTranslation("global");

    // const lang = i18n.language;

    const linkArray = [
        {
            title: t("navbar.home"),
            className: "home",
            link: "/",
            caret: false,
            linkList: [],
        },

        {
            title: t("navbar.about_us"),
            className: "about-us",
            link: null,
            caret: true,
            linkList: [
                { title: t("navbar.au_subtitle_1"), link: "/about-us/introduction-to-wiser-sport/" },
                { title: t("navbar.au_subtitle_2"), link: "/about-us/mission-statement-of-wwsc/" },
            ],
        },

        {
            title: t("navbar.wiser_sport"),
            className: "sport",
            link: null,
            caret: true,
            linkList: [
                { title: t("navbar.ws_subtitle_1"), link: "/wiser-sport/the-rules-of-wiser-sport/" },
                {
                    title: t("navbar.ws_subtitle_2"),
                    link: "/wiser-sport/balls-and-basic-equipment-for-wiser-sport/",
                },
                { title: t("navbar.ws_subtitle_3"), link: "/wiser-sport/dress-code-for-wiser-sport/" },
                { title: t("navbar.ws_subtitle_4"), link: "/wiser-sport/glossary-of-terms/" },
            ],
        },

        {
            title: t("navbar.play_wiser"),
            className: "play",
            link: null,
            caret: true,
            linkList: [
                {
                    title: t("navbar.pw_subtitle_1"),
                    link: "/play-wiser/video-tutorial-play-wiser-ball",
                },
                {
                    title: t("navbar.pw_subtitle_2"),
                    link: "/play-wiser/wwsc-demo-video-marching-etiquette-interception",
                },
                { title: t("navbar.pw_subtitle_3"), link: "/play-wiser/wiser-referee-training" },
                {
                    title: t("navbar.pw_subtitle_4"),
                    link: "/play-wiser/game-recording-sheet-app-download",
                },
                { title: t("navbar.pw_subtitle_5"), link: "/play-wiser/faqs" },
            ],
        },

        {
            title: t("navbar.gallery"),
            className: "gallery",
            link: null,
            caret: true,
            linkList: [
                {
                    title: t("navbar.ga_subtitle_1"),
                    link: "/galleries/wwsc-g4-referee-training-albums",
                },
                {
                    title: t("navbar.ga_subtitle_2"),
                    link: "/galleries/wwsc-hong-kong-gallery",
                },
                {
                    title: t("navbar.ga_subtitle_3"),
                    link: "/galleries/galleries-of-wiser-sport-activities-around-the-world-1",
                },
                {
                    title: t("navbar.ga_subtitle_4"),
                    link: "/galleries/galleries-of-wiser-sport-activities-around-the-world-2",
                },
            ],
        },

        {
            title: t("navbar.wiser_info"),
            className: "info",
            link: null,
            caret: true,
            linkList: [
                { title: t("navbar.wi_subtitle_1"), link: "/wiser-info/wwsc-inaugural-ceremony" },
                { title: t("navbar.wi_subtitle_2"), link: "/wiser-info/wwsc-notices-1" },
                { title: t("navbar.wi_subtitle_3"), link: "/wiser-info/wiser-event-news" },
                { title: t("navbar.wi_subtitle_4"), link: "/wiser-info/wiser-global-links" },
            ],
        },
        // temporary button access

        { title: t("navbar.contact_us"), className: "contact", link: "/contact-us", caret: false, linkList: [] },
        {
            title: t("navbar.referee_system"),
            className: "referee-system",
            link: "/referee-home",
            caret: false,
            linkList: [],
        },
    ];

    return (
        <div className="navbar w3-theme-d3 ">
            <div className="navbar-container">

                {linkArray.map((link) => (
                    <CustomDrop
                        className="custom-dropdown"
                        title={link.title}
                        link={link.link}
                        linkList={link.linkList}
                        drop={link.linkList.length !== 0}
                        caret={link.caret}
                    />
                ))}
            </div>
        </div>
    );
}
