/** @format */

import { NavLink } from "react-router-dom";
import CustomDrop from "../CustomDrop/CustomDrop";
import "./Navbar.css";

export default function Navbar() {
    const linkArray = [
        {
            title: "About Us",
            className: "about-us",
            link: null,
            caret: true,
            linkList: [
                { title: "Introduction to Wiser Sport", link: "/about-us/introduction-to-wiser-sport/" },
                { title: "Mission Statement of WWSC", link: "/about-us/mission-statement-of-wwsc/" },
            ],
        },

        {
            title: "Wiser Sport",
            className: "sport",
            link: null,
            caret: true,
            linkList: [
                { title: "The Rules of Wiser Sport", link: "/wiser-sport/the-rules-of-wiser-sport/" },
                {
                    title: "Balls and Basic Equipment for Wiser Sport",
                    link: "/wiser-sport/balls-and-basic-equipment-for-wiser-sport/",
                },
                { title: "Dress Code for Wiser Sport", link: "/wiser-sport/dress-code-for-wiser-sport/" },
                { title: "Glossary of Terms", link: "/wiser-sport/glossary-of-terms/" },
            ],
        },

        {
            title: "Play Wiser",
            className: "play",
            link: null,
            caret: true,
            linkList: [
                {
                    title: "Video Tutorial: “How to Play Wiser Ball”",
                    link: "/play-wiser/video-tutorial-play-wiser-ball",
                },
                {
                    title: "WWSC Demo Video (Marching/Etiquette/Interception)",
                    link: "/play-wiser/wwsc-demo-video-marching-etiquette-interception",
                },
                { title: "Wiser Referee Training", link: "/play-wiser/wiser-referee-training" },
                { title: "How to Record A Wiser Ball Game", link: "/play-wiser/game-recording-sheet-app-download" },
                { title: "Frequently Asked Questions (FAQs)", link: "/play-wiser/faqs" },
            ],
        },

        {
            title: "Galleries",
            className: "gallery",
            link: null,
            caret: true,
            linkList: [
                {
                    title: "WWSC’s G4 Referee Trainings",
                    link: "/galleries/wwsc-g4-referee-training-albums",
                },
                {
                    title: "WWSC in Hong Kong",
                    link: "/galleries/wwsc-hong-kong-gallery",
                },
                {
                    title: "Wiser Sport Activities (1)",
                    link: "/galleries/galleries-of-wiser-sport-activities-around-the-world-1",
                },
                {
                    title: "Wiser Sport Activities (2)",
                    link: "/galleries/galleries-of-wiser-sport-activities-around-the-world-2",
                },
            ],
        },

        {
            title: "Wiser Info",
            className: "info",
            link: null,
            caret: true,
            linkList: [
                { title: "WWSC’s First Inaugural Ceremony", link: "/wiser-info/wwsc-inaugural-ceremony" },
                { title: "Notices", link: "/wiser-info/wwsc-notices-1" },
                { title: "Wiser Event News", link: "/wiser-info/wiser-event-news" },
                { title: "Wiser Global Links", link: "/wiser-info/wiser-global-links" },
            ],
        },
        { title: "Contact", className: "contact", link: "/contact-us", caret: false, linkList: [] },

        // temporary button access
        { title: "Referee System", className: "referee-system", link: "/referee-home", caret: false, linkList: [] },
    ];

    // const linkStyle = {
    //     height: "100%",
    //     width: "100%",

    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    // };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="custom-dropdown">
                    <NavLink to="/" className="custom-link">
                        Home
                    </NavLink>
                </div>

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

                <div className="custom-dropdown">Search</div>
            </div>
        </div>
    );
}
