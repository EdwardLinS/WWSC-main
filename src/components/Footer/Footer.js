/** @format */

import "./Footer.css";

import { NavLink } from "react-router-dom";

export default function Footer() {
    const linkArray = [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about-us" },
        { title: "Wiser Sport", link: "/wiser-sport" },
        { title: "Play Wiser", link: "/play-wiser" },
        { title: "Privacy Policy", link: "/wwsc-privacy-policy" },
        { title: "Terms & Conditions", link: "/terms-conditions" },
        { title: "Contact Us", link: "/contact-us" },
    ];

    return (
        <div className="footer">
            <div><ul class="social-icon">
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
                        <p id="footer-link">
                            <NavLink to={link.link} style={{ color: "white", paddingRight: "10px" }}>
                                {link.title}
                            </NavLink>
                        </p>
                    </div>
                ))}
        </div>
        <hr></hr>
            <div className="copyright">
                <span className="copyright-text">© 2012-2023 World Wiser Sport Committee. All Rights Reserved.</span>
            </div>
        </div>
    );
}
