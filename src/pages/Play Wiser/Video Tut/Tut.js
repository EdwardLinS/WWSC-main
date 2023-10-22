/** @format */

import "./Tut.css";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";

export default function Tut({ history }) {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    // =================English================

    const youtubeContent = (
        <div className="video-container">
            <div className="video-item">
                <h3>YouTube Video Tutorial, Full Version:</h3>
                <a href="http://youtu.be/RFIru2Bv33w">http://youtu.be/RFIru2Bv33w</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/RFIru2Bv33w?si=g7DxzuUD_fIRI5mX&amp;start=6"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
            <div className="video-item">
                <h3> YouTube Video Tutorial, Part 1:</h3>
                <a href="http://youtu.be/AEPuZ5OkCT0">http://youtu.be/AEPuZ5OkCT0</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/AEPuZ5OkCT0?si=kHaCInKA7_EBrQHI&amp;start=4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
            <div className="video-item">
                <h3> YouTube Video Tutorial, Part 2</h3>
                <a href="http://youtu.be/eFkCAQRamyE">http://youtu.be/eFkCAQRamyE</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/eFkCAQRamyE?si=_NQDgiCu_7Twa518&amp;start=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
            <div className="video-item">
                <h3>YouTube Video Tutorial, Part 3:</h3>
                <a href="http://youtu.be/s8jtNnw9NtQ">http://youtu.be/s8jtNnw9NtQ</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/s8jtNnw9NtQ?si=146WIGXrcHr-SA_x&amp;start=2"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr></hr>
            <div className="video-item">
                <h3>YouTube Video Tutorial, Part 4:</h3>
                <a href="http://youtu.be/CExtrz5V6SE">http://youtu.be/CExtrz5V6SE</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/CExtrz5V6SE?si=u_ECoskzHkqfrLDQ&amp;start=3"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    );

    // const youkuContent = (
    //     <div className="content">
    //         <p>
    //             Youku—Link of Video Tutorial, Full Version：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzcxMjI0.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzcxMjI0.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 1：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzM2NDgw.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzM2NDgw.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 2：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzQ1ODA4.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzQ1ODA4.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 3：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1NTU3OTk2.html">
    //                 http://v.youku.com/v_show/id_XNTY1NTU3OTk2.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 4：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzI3NzM2.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzI3NzM2.html
    //             </a>
    //         </p>
    //     </div>
    // );

    const content = [
        { title: "Youtube", content: youtubeContent },
        // { title: "Youku", content: youkuContent },
    ];
    // =================繁體中文================

    const youtubeContent_zh_TW = (
        <div className="video-container">
            <div className="video-item">
                <h3>教學視頻完整版本鍵結：</h3>
                <a href="http://youtu.be/qlelOHIrPp0">http://youtu.be/qlelOHIrPp0</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/qlelOHIrPp0?si=2zPQZkheQcSGNLqS&amp;start=5"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
            <div className="video-item">
                <h3>教學視頻第一部份鍵結：</h3>
                <a href="http://youtu.be/d_SDxe6nWv0">http://youtu.be/d_SDxe6nWv0</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/d_SDxe6nWv0?si=unAwMLbdNgnsKcSj&amp;start=2"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
            <div className="video-item">
                <h3>教學視頻第二部份鍵結：</h3>
                <a href="http://youtu.be/tcVat_bL3XI">http://youtu.be/tcVat_bL3XI</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/tcVat_bL3XI?si=ngCcPElI5WlMqSVx&amp;start=5"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
            <div className="video-item">
                <h3>教學視頻第三部份鍵結：</h3>
                <a href="http://youtu.be/gAXjZ6DbPYA">http://youtu.be/gAXjZ6DbPYA</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/gAXjZ6DbPYA?si=h1Qcr-xPjBfVnXpk&amp;start=5"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr></hr>
            <div className="video-item">
                <h3>教學視頻第四部份鍵結：</h3>
                <a href="http://youtu.be/IzLihsf5S-E">http://youtu.be/IzLihsf5S-E</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/IzLihsf5S-E?si=PDfHhIZe-VINEcjy&amp;start=4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    );

    // const youkuContent = (
    //     <div className="content">
    //         <p>
    //             Youku—Link of Video Tutorial, Full Version：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzcxMjI0.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzcxMjI0.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 1：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzM2NDgw.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzM2NDgw.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 2：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzQ1ODA4.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzQ1ODA4.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 3：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1NTU3OTk2.html">
    //                 http://v.youku.com/v_show/id_XNTY1NTU3OTk2.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 4：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzI3NzM2.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzI3NzM2.html
    //             </a>
    //         </p>
    //     </div>
    // );

    const content_zh_TW = [
        { title: "Youtube", content: youtubeContent_zh_TW },
        // { title: "Youku", content: youkuContent },
    ];

    // =================简体中文================

    const youtubeContent_zh_CN = (
        <div className="video-container">
            <div className="video-item">
                <h3>教学视频完整版本键结：</h3>
                <a href="http://youtu.be/qlelOHIrPp0">http://youtu.be/qlelOHIrPp0</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/qlelOHIrPp0?si=2zPQZkheQcSGNLqS&start=5"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
            <div className="video-item">
                <h3>教学视频第一部份键结：</h3>
                <a href="http://youtu.be/d_SDxe6nWv0">http://youtu.be/d_SDxe6nWv0</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/d_SDxe6nWv0?si=unAwMLbdNgnsKcSj&start=2"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
            <div className="video-item">
                <h3>教学视频第二部份键结：</h3>
                <a href="http://youtu.be/tcVat_bL3XI">http://youtu.be/tcVat_bL3XI</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/tcVat_bL3XI?si=ngCcPElI5WlMqSVx&start=5"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr />
            <div className="video-item">
                <h3>教学视频第叁部份键结：</h3>
                <a href="http://youtu.be/gAXjZ6DbPYA">http://youtu.be/gAXjZ6DbPYA</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/gAXjZ6DbPYA?si=h1Qcr-xPjBfVnXpk&start=5"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <hr></hr>
            <div className="video-item">
                <h3>教学视频第四部份键结：</h3>
                <a href="http://youtu.be/IzLihsf5S-E">http://youtu.be/IzLihsf5S-E</a>
                <div className="video-content">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/IzLihsf5S-E?si=PDfHhIZe-VINEcjy&start=4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    );

    // const youkuContent = (
    //     <div className="content">
    //         <p>
    //             Youku—Link of Video Tutorial, Full Version：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzcxMjI0.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzcxMjI0.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 1：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzM2NDgw.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzM2NDgw.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 2：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzQ1ODA4.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzQ1ODA4.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 3：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1NTU3OTk2.html">
    //                 http://v.youku.com/v_show/id_XNTY1NTU3OTk2.html
    //             </a>
    //         </p>

    //         <p>
    //             Youku—Link of Video Tutorial, Part 4：{" "}
    //             <a href="http://v.youku.com/v_show/id_XNTY1MzI3NzM2.html">
    //                 http://v.youku.com/v_show/id_XNTY1MzI3NzM2.html
    //             </a>
    //         </p>
    //     </div>
    // );

    const content_zh_CN = [
        { title: "Youtube", content: youtubeContent_zh_CN },
        // { title: "Youku", content: youkuContent },
    ];

    return (
        <div>
            <div className="wwsc-container">
                <div className="img-text-container">
                    <h1>{t("video_tutorial.title")}</h1>
                    {lang === "en" && <CustomTab content={content} />}
                    {lang === "zh-TW" && <CustomTab content={content_zh_TW} />}
                    {lang === "zh-CN" && <CustomTab content={content_zh_CN} />}
                </div>
            </div>
        </div>
    );
}
