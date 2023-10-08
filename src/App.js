/** @format */

import "./App.css";

import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ParallaxProvider } from "react-scroll-parallax";
import { useAuthContext } from "./hooks/useAuthContext";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

// import components & pages

import Landing from "./pages/Landing/Landing";
import Contact from "./pages/Contact/Contact";
import Introduction from "./pages/About Us/Introduction/Introduction";
import Mission from "./pages/About Us/Mission/Mission";

import Rules from "./pages/Wiser Sport/Rules/Rules";
import Equipment from "./pages/Wiser Sport/Equipment/Equipment";
import Dress from "./pages/Wiser Sport/Dress Code/Dress";
import Glossary from "./pages/Wiser Sport/Glossary/Glossary";

import Tut from "./pages/Play Wiser/Video Tut/Tut";
import Marching from "./pages/Play Wiser/Marching/Marching";
import FAQ from "./pages/Play Wiser/FAQ/FAQ";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Referee from "./pages/Play Wiser/Referee/Referee";
import Sheet from "./pages/Play Wiser/Sheet/Sheet";
import Ceremony from "./pages/Wiser Info/Ceremony/Ceremony";
import Notice from "./pages/Wiser Info/Notice/Notice";

import RefereeHome from "./pages/Referee/RefereeHome/RefereeHome";
import Login from "./pages/Referee/login/Login";
import Signup from "./pages/Referee/signup/Signup";

import NoticePage from "./components/NoticePage/NoticePage";
import Privacy from "./pages/Privacy Policy/Privacy";
import Terms from "./pages/Terms/Terms";
import GlobalLink from "./pages/Wiser Info/Global Links/GlobalLink";
import NewBread from "./components/NewBread/NewBread";
import RefereeProfile from "./pages/Referee/RefereeProfile/RefereeProfile";
import RefereeRecord from "./pages/Referee/RefereeRecord/RefereeRecord";

function App() {
    const { t, i18n } = useTranslation("global");

    const currentLanguage = i18n.language;

    useEffect(() => {
        console.log("Setting document title");
        document.title = t("document.title");
    }, [currentLanguage, t]);

    const [url, setUrl] = useState(process.env.REACT_APP_WORDPRESS_API);

    let { data: notices, isPending, error } = useFetch(url, { type: "GET" });

    const { authIsReady, user } = useAuthContext();

    return (
        <div className="App">
            {authIsReady && (
                <ParallaxProvider>
                    <BrowserRouter>
                        <Header />
                        <Navbar />
                        <NewBread />
                        <Routes>
                            <Route exact path="/" Component={Landing} />
                            <Route path="/wwsc-privacy-policy" element={<Privacy />} />
                            <Route path="/terms-conditions" element={<Terms />} />
                            <Route path="/about-us/introduction-to-wiser-sport/" element={<Introduction />} />
                            <Route path="/about-us/mission-statement-of-wwsc/" element={<Mission />} />

                            <Route path="/wiser-sport/the-rules-of-wiser-sport" element={<Rules />} />
                            <Route
                                path="/wiser-sport/balls-and-basic-equipment-for-wiser-sport"
                                element={<Equipment />}
                            />
                            <Route path="/wiser-sport/dress-code-for-wiser-sport/" element={<Dress />} />
                            <Route path="/wiser-sport/glossary-of-terms/" element={<Glossary />} />

                            <Route path="/play-wiser/video-tutorial-play-wiser-ball" element={<Tut />} />
                            <Route
                                path="/play-wiser/wwsc-demo-video-marching-etiquette-interception"
                                element={<Marching />}
                            />
                            <Route path="/play-wiser/wiser-referee-training" element={<Referee />} />
                            <Route path="/play-wiser/game-recording-sheet-app-download" element={<Sheet />} />
                            <Route path="/play-wiser/faqs" element={<FAQ />} />

                            <Route path="/wiser-info/wwsc-inaugural-ceremony" element={<Ceremony />} />

                            {notices &&
                                Array(Math.ceil(notices.length / 10))
                                    .fill(0)
                                    .map((_, i) => (
                                        <Route
                                            path={"/wiser-info/wwsc-notices-" + (i + 1)}
                                            element={
                                                <Notice
                                                    page={i}
                                                    notices={notices}
                                                    isPending={isPending}
                                                    error={error}
                                                />
                                            }
                                        />
                                    ))}

                            {notices &&
                                notices.map((notice) => (
                                    <Route
                                        path={"/wiser-info/wwsc-notices/" + notice.slug.toString()}
                                        element={<NoticePage content={notice.content.rendered} />}
                                    />
                                ))}

                            <Route path="/wiser-info/wiser-global-links" element={<GlobalLink />} />

                            <Route path="/contact-us" Component={Contact} />

                            <Route
                                path="/referee-home"
                                element={user ? <RefereeHome /> : <Navigate to="/referee-home/login" />}
                            />
                            <Route
                                path="/referee-profile"
                                element={user ? <RefereeProfile /> : <Navigate to="/referee-home/login" />}
                            />
                            <Route
                                path="/referee-training-record"
                                element={
                                    user ? <RefereeRecord uid={user.uid} /> : <Navigate to="/referee-home/login" />
                                }
                            />

                            <Route
                                path="/referee-home/login"
                                element={user ? <Navigate to="/referee-home" /> : <Login />}
                            />
                            <Route
                                path="/referee-home/signup"
                                element={user ? <Navigate to="/referee-home" /> : <Signup />}
                            />
                        </Routes>

                        <Footer />
                    </BrowserRouter>
                </ParallaxProvider>
            )}
        </div>
    );
}

export default App;
