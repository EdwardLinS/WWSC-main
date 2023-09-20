/** @format */

// import { useState } from 'react';
import { useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const path = useLocation().pathname;
    const display = !(path.slice(1).split("-")[0] === "referee");

    return (
        <>
            {display && (
                <div className="header-container">
                    <div className="left">
                        <div className="header-logo-container">
                            <img className="logo" src="/WWSC-logo.png" alt="logo" />
                            <p className="slogan">Play "Wiser" & Get Wiser</p>
                        </div>
                        <div className="title">
                            <h1 id="title">World Wiser Sport Committee</h1>
                            <p>Offical Web Site of Wiser Ball</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="header-text">
                            <span>Language Selection</span>
                            <span>Sign Up</span>
                            <span> Login</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
