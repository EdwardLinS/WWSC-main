/** @format */

import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import App from "./App";
// import i18next (needs to be bundled ;))
import "./i18n";

import { AuthContextProvider } from "./context/AuthContext";

const root = createRoot(document.getElementById("root"));
const loadingMarkup = (
    <div className="py-4 text-center">
        <h3>Loading...</h3>
    </div>
);

root.render(
    <React.StrictMode>
        <Suspense fallback={loadingMarkup}>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </Suspense>
    </React.StrictMode>
);
