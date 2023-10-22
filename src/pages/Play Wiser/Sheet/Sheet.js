/** @format */

import "./Sheet.css";
import { useTranslation } from "react-i18next";


export default function Sheet() {
    const { i18n } = useTranslation("global");

    const lang = i18n.language;

    return (
        <div>
            <div className="wwsc-container">
                {lang === "en" && (
                    <div className="text-container">
                        <h1>How to Record A Wiser Ball Game</h1>
                        <p>Please click the following link to download each pdf file.</p>

                        <div className="pdf">
                            <p>
                                <a href="https://worldwisersport.org/pdf/recording_sheet/WWSC_Wiser_Game_Recording_Sheet_Rev_03_24_2014.pdf">
                                    WWSC’s Wiser Game Recording Sheet
                                </a>
                            </p>
                            <p>
                                <a href="https://worldwisersport.org/pdf/recording_sheet/WWSC_Wiser_Game_Recording_Sheet_Instructions_03_31_2014.pdf">
                                    Instructions for Using WWSC’s Wiser Game Recording Sheet
                                </a>
                            </p>
                        </div>
                    </div>
                )}
                {lang === "zh-TW" && (
                    <div className="text-container">
                        <h1>如何記錄Wiser比賽</h1>
                        <p>請點擊下列鍵結下載 pdf 檔案。</p>

                        <div className="pdf">
                            <p>
                                <a href="https://worldwisersport.org/pdf/recording_sheet/WWSC_Wiser_%E6%AF%94%E8%B3%BD%E7%B4%80%E9%8C%84%E8%A1%A8_%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87_rev_03_24_2014.pdf">
                                    WWSC Wiser 比賽紀錄表 (繁體中文)
                                </a>
                            </p>
                            <p>
                                <a href="https://worldwisersport.org/pdf/recording_sheet/WWSC_Wiser_%E6%AF%94%E8%B3%BD%E7%B4%80%E9%8C%84%E8%A1%A8%E4%BD%BF%E7%94%A8%E8%AA%AA%E6%98%8E_%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87_03_31_2014.pdf">
                                    WWSC Wiser 比賽紀錄表使用說明 (繁體中文)
                                </a>
                            </p>
                        </div>
                    </div>
                )}
                {lang === "zh-CN" && (
                    <div className="text-container">
                        <h1>如何记录Wiser比赛</h1>
                        <p>请点击下列键结下载 pdf 档案。</p>

                        <div className="pdf">
                            <p>
                                <a href="https://worldwisersport.org/pdf/recording_sheet/WWSC_Wiser_%E6%AF%94%E8%B5%9B%E8%AE%B0%E5%BD%95%E8%A1%A8_%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87_rev_03_24_2014.pdf">
                                    WWSC Wiser 比賽紀錄表 (简体中文)
                                </a>
                            </p>
                            <p>
                                <a href="https://worldwisersport.org/pdf/recording_sheet/WWSC_Wiser_%E6%AF%94%E8%B5%9B%E8%AE%B0%E5%BD%95%E8%A1%A8%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E_%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87_03_31_2014.pdf">
                                    WWSC Wiser 比赛纪录表使用说明 (简体中文)
                                </a>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
