/** @format */

import "./Rules.css";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";

export default function Rules() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    const updatedContent = (
        <div>
            <img src="/WWSC logo_ltr_head.png" alt="logo" style={{ width: "100px" }} /> <br /> <br />
            <div>
                <p>
                    When holding official Wiser ball competitions, many Wiser sport organizations are faced with the
                    issues of securing suitable competition venues, limitations imposed by the agenda of the
                    competitions, and having a large number of teams participating in the competitions. Therefore, it is
                    difficult for the organizers of the competitions to complete all the games on schedule without
                    specifically defining an allowed range of Wiser competition fields and the time duration of each
                    game. In response to these practical needs, after several discussion meetings, the World Wiser Sport
                    Committee (WWSC) established this special edition of the Rules of Wiser Sport Handbook
                    <strong>for Official Wiser Ball Competitions</strong> (hereafter referred to as the Competition
                    Rules Handbook). This Competition Rules Handbook uniformly set out the range of the competition
                    field size and the time duration of each game. Corresponding modifications based on these new
                    stipulations have also been made to the original general Wiser sport rules.
                </p>
                <p>
                    In addition, since the WWSC officially published
                    <a href="https://rb.gy/y3ae6" target="_blank" rel="noreferrer">
                        the Rules of Wiser Sport Handbook version 1.0
                    </a>
                    on November 30, 2013, the WWSC has continuously received questions, feedback, and suggestions
                    regarding some of the rules encountered in the actual games and competitions held during the past
                    few years. Therefore, the WWSC also took this opportunity to incorporate amendments or additions to
                    some of the existing rules into this edition. For example, the types of fouls and their
                    corresponding penalties have been simplified so that they are easier to be followed by players and
                    to be called and executed by referees. All Wiser sport organizations must comply with and use this
                    edition of the competition rules handbook when holding any official Wiser ball competitions.
                </p>
                <p>
                    Besides the Competition Rules Handbook for official Wiser ball competitions, the WWSC also revised
                    original Rules of Wiser Sport Handbook, English Version 1.0 and published the version 2.0 for
                    <strong>the promotion of Wiser sport and general practice Wiser games</strong>
                </p>
            </div>
            <p>Please download two versions of Rules of Wiser Sport Handbook from the following web links:</p>
            <div>
                <p>
                    <a href="https://rb.gy/7jm43" target="_blank" rel="noreferrer">
                        (1) Rules of Wiser Sport Handbook【For Official Wiser Ball Competitions】English Version 1.0
                    </a>
                </p>

                <p>
                    <a href="https://rebrand.ly/k9m33h1" target="_blank" rel="noreferrer">
                        (2)Rules of Wiser Sport Handbook【For General Promotion and Practice Games】English Version 2.0
                    </a>
                </p>
            </div>
            <div className="signature">
                The Secretariat of World Wiser Sport Committee<br></br>
                March 21, 2018
            </div>
        </div>
    );

    const oldContent = (
        <div>
            <img src="/WWSC logo_ltr_head.png" alt="logo" style={{ width: "100px" }} /> <br /> <br />
            <div>
                <p>
                    The World Wiser Sport Committee (WWSC) hereby officially publishes the English Version 1.0 of “
                    <a href="https://rb.gy/y3ae6" target="_blank" rel="noreferrer">
                        Rules of Wiser Sport Handbook
                    </a>
                    ” (hereafter “Rules Handbook“). This Rules Handbook will provide players with the basic rules and
                    standards to be followed in all Wiser Sport competitions.{" "}
                </p>
                <p>
                    However, with respect to competitions on a national, state/provincial, or club level, the
                    organization hosting the competition may, in accordance with this Rules Handbook, establish policies
                    of competition based on the specific circumstances of that particular time and place. Formal
                    international-level Wiser competitions must follow this Rules Handbook formulated and published by
                    the WWSC.
                </p>
                <p>
                    The WWSC reserves all rights to revise this Rules Handbook and to interpret all Wiser competition
                    rules. The WWSC is a non-profit organization legally established in the United States. We teach
                    everyone free of charge the techniques and rules of the Wiser sport. We hope to enable more and more
                    people to experience the incomparable benefits and joy that playing Wiser ball provides. Therefore,
                    this Rules Handbook may be used only for the non-profit purposes of promoting the Wiser sport.
                    According to law, it is forbidden to use this Rules Handbook for any profit-making purposes.
                </p>
            </div>
            <div className="signature">
                World Wiser Sport Committee <br></br>November 30, 2013
            </div>
            <div>
                <p className="no-ident">
                    Please click the following link to download the rules handbook in pdf format.
                </p>
                <p>
                    <a href="https://rb.gy/y3ae6" target="_blank" rel="noreferrer">
                        WWSC “Rules of Wiser Sport Handbook”, English Version 1.0 (11/30/2013)
                    </a>
                </p>
            </div>
        </div>
    );

    const content = [
        { title: t("rule.tab_new"), content: updatedContent },
        { title: t("rule.tab_old"), content: oldContent },
    ];

    // =================繁體中文================
    const updatedContent_zh_TW = (
        <div>
            <img src="/WWSC logo_ltr_head.png" alt="logo" style={{ width: "100px" }} /> <br /> <br />
            <div>
                <p>
                    針對很多Wiser運動團體在舉辦正式Wiser球競賽時，需要限定競賽場地的範圍和每場比賽的時間，因此世界Wiser運動委員會經過多次的開會討論後，決定修改本會於西元2013年11月30日正式公佈的「
                    Wiser運動比賽規則手冊」1.0 版本，來特別制定一套適合<strong>正式Wiser運動競賽</strong>
                    的Wiser運動規則手冊（以下簡稱為 “競賽規則手冊”） 此 “競賽規則手冊”
                    統一訂定出正式競賽場地範圍的大小和每場比賽時間的規定，並根據這些新規定而對原有一般Wiser運動規則作出相應性的修改。各Wiser運動團體在舉辦正式Wiser球競賽時，必須遵守和使用此適用正式Wiser球競賽的
                    “競賽規則手冊”1.0 版本。
                </p>
                <p>
                    除此之外，這幾年來本會也陸續收到大家在實際比賽中發生的一些關於規則方面的問題或對於某些規則提出的回饋和建議，因此本會也特別藉此機會對於原有的某些規則方面作出修改或補充，例如：將原有的犯規種類和其相應的處罰方式簡化，讓比賽球員和執法的裁判員能更容易的去遵守和執行。.
                </p>
                <p>
                    除了以上適合正式競賽使用的“競賽規則手冊”以外，本會還特別修訂原有的1.0版本規則，而公佈另一套適用於
                    <strong>一般推廣和練習賽</strong>的Wiser運動規則手冊2.0版本。
                </p>
            </div>
            <p>此兩套不同的Wiser運動規則手冊版本，大家可以從以下本會繁體中文網站鏈接下載使用：</p>
            <div>
                <p>
                    <a href="https://rb.gy/5bysh" target="_blank" rel="noreferrer">
                        （1）Wiser運動比賽規則手冊【適用於Wiser球正式競賽使用】繁體中文1.0版本（更新于05/19/2019）
                    </a>
                </p>

                <p>
                    <a href="https://rb.gy/lbfcp" target="_blank" rel="noreferrer">
                        （2）Wiser運動比賽規則手冊【適用於一般推廣和練習賽使用】繁體中文2.0版本（更新于05/19/2019）
                    </a>
                </p>
            </div>
            <div className="signature">
                世界Wiser運動委員會秘書處<br></br>
                西元2018年3月21日
            </div>
        </div>
    );

    const oldContent_zh_TW = (
        <div>
            <img src="/WWSC logo_ltr_head.png" alt="logo" style={{ width: "100px" }} /> <br /> <br />
            <div>
                <p>
                    世界Wiser運動委員會於此正式公佈發行中文1.0版本的
                    <a href="https://rb.gy/5oquc" target="_blank" rel="noreferrer">
                        “Wiser運動比賽規則手冊”
                    </a>
                    (以下簡稱”規則手冊”)。
                </p>
                <p>
                    此次公佈的規則手冊是作為所有Wiser運動比賽遵循的基本規則標準，但對於國家級、州/省級或俱樂部級的比賽，主辦單位可以依照本規則手冊，並結合當時、當地的具體情況，制定適合的比賽辦法。對于世界性的國際級正式Wiser比賽，則必須遵守本委員會制定公佈的本規則手冊執行。世界Wiser運動委員會將保留對本規則手冊的修改和對所有Wiser比賽規則的解釋權利。
                </p>
                <p>
                    世界Wiser運動委員會是一個在美國合法成立的非營利團體，我們將Wiser球藝和規則無償地教給大家，希望能讓更多的人都能享受到打Wiser球帶給他們無比的利益和樂趣。因此，此規則手冊只能作為非營利推廣和發展Wiser運動之用，依法律規定禁止用來營利賺錢。
                </p>
            </div>
            <div className="signature">
                世界Wiser 運動委員會 <br></br>2013年11月30日
            </div>
            <div>
                <p className="no-ident">請點擊下列鍵結下載 pdf 格式的繁體中文版1.0規則手冊</p>
                <p>
                    <a href="https://rb.gy/5oquc" target="_blank" rel="noreferrer">
                        世界Wiser運動委員會–Wiser運動比賽規則手冊繁體中文版1.0（11/30/2013）
                    </a>
                </p>
            </div>
        </div>
    );
    const content_zh_TW = [
        { title: t("rule.tab_new"), content: updatedContent_zh_TW },
        { title: t("rule.tab_old"), content: oldContent_zh_TW },
    ];

    // =================简体中文================
    const updatedContent_zh_CN = (
        <div>
            <img src="/WWSC logo_ltr_head.png" alt="logo" style={{ width: "100px" }} /> <br /> <br />
            <div>
                <p>
                    针对很多Wiser运动团体在举办正式Wiser球竞赛时，需要限定竞赛场地的範围和每场比赛的时间，因此世界Wiser运动委员会经过多次的开会讨论後，决定修改本会於西元2013年11月30日正式公佈的「
                    Wiser运动比赛规则手册」1.0 版本，来特别制定一套适合<strong>正式Wiser运动竞赛</strong>
                    的Wiser运动规则手册（以下简称为 “竞赛规则手册”） 此 “竞赛规则手册”
                    统一订定出正式竞赛场地範围的大小和每场比赛时间的规定，并根据这些新规定而对原有一般Wiser运动规则作出相应性的修改。各Wiser运动团体在举办正式Wiser球竞赛时，必须遵守和使用此适用正式Wiser球竞赛的
                    “竞赛规则手册”1.0 版本。
                </p>
                <p>
                    除此之外，这几年来本会也陆续收到大家在实际比赛中发生的一些关於规则方面的问题或对於某些规则提出的回馈和建议，因此本会也特别藉此机会对於原有的某些规则方面作出修改或补充，例如：将原有的犯规种类和其相应的处罚方式简化，让比赛球员和执法的裁判员能更容易的去遵守和执行。.
                </p>
                <p>
                    除了以上适合正式竞赛使用的“竞赛规则手册”以外，本会还特别修订原有的1.0版本规则，而公佈另一套适用於
                    <strong>一般推广和练习赛</strong>的Wiser运动规则手册2.0版本。
                </p>
            </div>
            <p>此两套不同的Wiser运动规则手册版本，大家可以从以下本会简体中文网站链接下载使用：</p>
            <div>
                <p>
                    <a href="https://rebrand.ly/483qf7n" target="_blank" rel="noreferrer">
                        （1）Wiser运动比赛规则手册【适用於Wiser球正式竞赛使用】简体中文1.0版本
                    </a>
                </p>

                <p>
                    <a href="https://rebrand.ly/elvfi24" target="_blank" rel="noreferrer">
                        （2）Wiser运动比赛规则手册【适用於一般推广和练习赛使用】简体中文2.0版本
                    </a>
                </p>
            </div>
            <div className="signature">
                世界Wiser运动委员会秘书处<br></br>
                西元2018年3月21日
            </div>
        </div>
    );

    const oldContent_zh_CN = (
        <div>
            <img src="/WWSC logo_ltr_head.png" alt="logo" style={{ width: "100px" }} /> <br /> <br />
            <div>
                <p>
                    世界Wiser运动委员会於此正式公佈发行中文1.0版本的
                    <a href="https://rebrand.ly/3weg9gu" target="_blank" rel="noreferrer">
                        “Wiser运动比赛规则手册”
                    </a>
                    (以下简称”规则手册”)。
                </p>
                <p>
                    此次公佈的规则手册是作为所有Wiser运动比赛遵循的基本规则标準，但对於国家级、州/省级或俱乐部级的比赛，主办单位可以依照本规则手册，并结合当时、当地的具体情况，制定适合的比赛办法。对于世界性的国际级正式Wiser比赛，则必须遵守本委员会制定公佈的本规则手册执行。世界Wiser运动委员会将保留对本规则手册的修改和对所有Wiser比赛规则的解释权利。
                </p>
                <p>
                    世界Wiser运动委员会是一个在美国合法成立的非营利团体，我们将Wiser球艺和规则无偿地教给大家，希望能让更多的人都能享受到打Wiser球带给他们无比的利益和乐趣。因此，此规则手册只能作为非营利推广和发展Wiser运动之用，依法律规定禁止用来营利赚钱。
                </p>
            </div>
            <div className="signature">
                世界Wiser 运动委员会 <br></br>2013年11月30日
            </div>
            <div>
                <p className="no-ident">请点击下列键结下载 pdf 格式的简体中文版1.0规则手册</p>
                <p>
                    <a href="https://rebrand.ly/3weg9gu" target="_blank" rel="noreferrer">
                        世界Wiser运动委员会–Wiser运动比赛规则手册简体中文版1.0（11/30/2013）
                    </a>
                </p>
            </div>
        </div>
    );
    const content_zh_CN = [
        { title: t("rule.tab_new"), content: updatedContent_zh_CN },
        { title: t("rule.tab_old"), content: oldContent_zh_CN },
    ];

    return (
        <div>
            <div className="wwsc-container">
                <div className="text-container">
                    <h1>{t("rule.title")}</h1>
                    {lang === "en" && <CustomTab content={content} />}
                    {lang === "zh-TW" && <CustomTab content={content_zh_TW} />}
                    {lang === "zh-CN" && <CustomTab content={content_zh_CN} />}
                </div>
            </div>
        </div>
    );
}
