/** @format */

import "./Marching.css";
import { useTranslation } from "react-i18next";

export default function Marching() {
    const { t, i18n } = useTranslation();

    const lang = i18n.language;

    return (
        <div>
            <div className="wwsc-container">
                {lang === "en" && (
                    <div className="img-text-container march">
                        <h1 style={{ marginTop: "24px" }}>WWSC Demo Video (Marching/Etiquette/Interception)</h1>
                        <div className="video-container">
                            <div className="video-item">
                                <p style={{ textIndent: "0px", textAlign: "left" }}>
                                    The World Wiser Sport Committee created this video to demonstrate:
                                </p>
                                <p style={{ textIndent: "1rem" }}>(1) Standard Marching Style of Wiser Ball Teams;</p>
                                <p style={{ textIndent: "1rem" }}>(2) Formal Etiquette of Wiser Ball Teams;</p>
                                <p style={{ textIndent: "1rem" }}>
                                    (3) How to Perform an “Interception” during Wiser ball games?
                                </p>
                            </div>
                            <div className="video-content">
                                <iframe
                                    width="760"
                                    height="515"
                                    src="https://www.youtube.com/embed/9rSN2WSRePk?si=W6f34u9Al2JIGvj0&amp;start=9"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
                {lang === "zh-TW" && (
                    <div className="img-text-container march">
                        <h1 style={{ marginTop: "24px" }}>WWSC 示範視頻（正步/禮儀/攔擊）</h1>
                        <div className="video-container">
                            <div className="video-item">
                                <p style={{ textIndent: "0px", textAlign: "left" }}>
                                    The 世界Wiser運動委員會製作以下的視頻是用來示範:
                                </p>
                                <p style={{ textIndent: "1rem" }}>(1) Wiser運動球隊的標準正步;</p>
                                <p style={{ textIndent: "1rem" }}>(2) Wiser運動球隊的正規禮節（行禮）;</p>
                                <p style={{ textIndent: "1rem" }}>(3) 如何進行“攔擊”。</p>
                            </div>
                            <div className="video-content">
                                <iframe
                                    width="760"
                                    height="515"
                                    src="https://www.youtube.com/embed/cqno_70tk-M?si=C_8gC86N-tJA6CKq&amp;start=6"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
                {lang === "zh-CN" && (
                    <div className="img-text-container march">
                        <h1 style={{ marginTop: "24px" }}>WWSC 示範视频（正步/礼仪/拦击）</h1>
                        <div className="video-container">
                            <div className="video-item">
                                <p style={{ textIndent: "0px", textAlign: "left" }}>
                                    The 世界Wiser运动委员会製作以下的视频是用来示範:
                                </p>
                                <p style={{ textIndent: "1rem" }}>(1) Wiser运动球队的标準正步;</p>
                                <p style={{ textIndent: "1rem" }}>(2) Wiser运动球队的正规礼节（行礼）;</p>
                                <p style={{ textIndent: "1rem" }}>(3) 如何进行“拦击”。</p>
                            </div>
                            <div className="video-content">
                                <iframe
                                    width="760"
                                    height="515"
                                    src="https://www.youtube.com/embed/cqno_70tk-M?si=C_8gC86N-tJA6CKq&start=6"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
