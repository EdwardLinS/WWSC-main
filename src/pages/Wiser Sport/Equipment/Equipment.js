/** @format */

import "./Equipment.css";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";

export default function Equipment() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    // =================English================
    const ballsContent = (
        <div>
            <h4>1. The Balls for Wiser Game:</h4>
            <p>
                Each ball shall have a diameter of about <strong>90</strong> millimeters and weighs about
                <strong>168</strong> grams. There are 7 red balls and 7 white balls. The balls of each color are
                numbered from 1 to 7.
            </p>
            <img src="/assets/Wiser Sport/Balls.jpg" alt="" style={{ width: "50vw" }} />
        </div>
    );
    const flagsContent = (
        <div>
            <h4>2. The Flags for Wiser Game:</h4>
            <p>
                Prepare <strong>10</strong> yellow and <strong>10</strong> red flags. The design and size of each flag
                is shown in the diagram below. The shape of the flag is an <strong>isosceles right triangle</strong>.
                The length of two equal sides of the triangle is
                <strong>
                    <u>one foot</u>
                </strong>
                . When inserting a flag into the ground, the pole of the flag should be
                <strong>
                    <u>2 feet</u>
                </strong>
                above the ground.
            </p>
            <img src="/assets/Wiser Sport/Flags.png" alt="" style={{ width: "50vw" }} />
            <br></br>
            <small>{t("equipment.content_flags_spec")}</small>
        </div>
    );

    const ropeContent = (
        <div>
            <h4>3. Prepare a 12-meter rope to delineate the “Centerline.”</h4>
            <img src="/assets/Wiser Sport/Rope.gif" alt="" style={{ width: "50vw" }} />
            <br></br>
            <small>{t("equipment.content_rope_spec")}</small>
        </div>
    );

    const content = [
        { title: t("equipment.tab_balls"), content: ballsContent },
        { title: t("equipment.tab_flags"), content: flagsContent },
        { title: t("equipment.tab_rope"), content: ropeContent },
    ];

    // =================繁體中文================

    const ballsContent_zh_TW = (
        <div>
            <h4>1. Wiser比賽球：</h4>
            <p>
                每顆球的直徑約<strong>90</strong> 毫米，重量約
                <strong>168</strong> 克。紅﹑白兩色各7顆，分別以1到7來編號。
            </p>
            <img src="/assets/Wiser Sport/Balls.jpg" alt="" style={{ width: "50vw" }} />
        </div>
    );
    const flagsContent_zh_TW = (
        <div>
            <h4>2. Wiser 比賽旗:</h4>
            <p>
                準備黃旗與紅旗各 <strong>10</strong> 支。旗子的規格和尺寸如下圖所示，兩邊為
                <strong>
                    <u>1英呎</u>
                </strong>
                長的<strong>等腰直角三角</strong>旗面，旗子插入地面後，地面以上的旗桿高度需為
                <strong>
                    <u>2英呎</u>
                </strong>
                。
            </p>
            <img src="/assets/Wiser Sport/Flags.png" alt="" style={{ width: "50vw" }} />
            <br></br>
            <small>{t("equipment.content_flags_spec")}</small>
        </div>
    );

    const ropeContent_zh_TW = (
        <div>
            <h4>3. 準備一條12米長的繩子來設定“中界線”。</h4>
            <img src="/assets/Wiser Sport/Rope.gif" alt="" style={{ width: "50vw" }} />
            <br></br>
            <small>{t("equipment.content_rope_spec")}</small>
        </div>
    );

    const content_zh_TW = [
        { title: t("equipment.tab_balls"), content: ballsContent_zh_TW },
        { title: t("equipment.tab_flags"), content: flagsContent_zh_TW },
        { title: t("equipment.tab_rope"), content: ropeContent_zh_TW },
    ];

    // =================简体中文================

    const ballsContent_zh_CN = (
        <div >
            <h4>1. Wiser比赛球：</h4>
            <p>
                每颗球的直径约<strong>90</strong> 毫米，重量约
                <strong>168</strong> 克。红﹑白两色各7颗，分别以1到7来编号。
            </p>
            <img src="/assets/Wiser Sport/Balls.jpg" alt="" style={{ width: "50vw" }} />
        </div>
    );
    const flagsContent_zh_CN = (
        <div >
            <h4>2. Wiser 比赛旗:</h4>
            <p>
                準备黄旗与红旗各 <strong>10</strong> 支。旗子的规格和尺寸如下图所示，两边为
                <strong>
                    <u>1英呎</u>
                </strong>
                长的<strong>等腰直角叁角</strong>旗面，旗子插入地面後，地面以上的旗桿高度需为
                <strong>
                    <u>2英呎</u>
                </strong>
                。
            </p>
            <img src="/assets/Wiser Sport/Flags.png" alt="" style={{ width: "50vw" }} />
            <br></br>
            <small>{t("equipment.content_flags_spec")}</small>
        </div>
    );

    const ropeContent_zh_CN = (
        <div >
            <h4>3. 準备一条12米长的绳子来设定“中界线”。</h4>
            <img src="/assets/Wiser Sport/Rope.gif" alt="" style={{ width: "50vw" }} />
            <br></br>
            <small>{t("equipment.content_rope_spec")}</small>
        </div>
    );
    const content_zh_CN = [
        { title: t("equipment.tab_balls"), content: ballsContent_zh_CN },
        { title: t("equipment.tab_flags"), content: flagsContent_zh_CN },
        { title: t("equipment.tab_rope"), content: ropeContent_zh_CN },
    ];

    return (
        <div>
            <div className="wwsc-container">
                <div className="img-text-container">
                    <h1>{t("equipment.title")}</h1>
                    {lang === "en" && <CustomTab content={content} />}
                    {lang === "zh-TW" && <CustomTab content={content_zh_TW} />}
                    {lang === "zh-CN" && <CustomTab content={content_zh_CN} />}
                </div>
            </div>
        </div>
    );
}
