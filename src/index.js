/** @format */

import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import i18n (needs to be bundled ;))
import "./i18n";

import { AuthContextProvider } from "./context/AuthContext";


const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>
);
