/** @format */

import "./Referee.css";
import { useTranslation } from "react-i18next";
import CustomTab from "../../../components/CustomTab/CustomTab";

export default function Referee({ history }) {
    const { i18n } = useTranslation("global");

    const lang = i18n.language;

    // =============English========

    const certContent = (
        <div className="content">
            <h3 className="referee-header">I. Certification System for Wiser Referees</h3>
            <p>
                1. All grades of official Wiser referees must complete the World Wiser Sport Committee’s (WWSC) required
                training courses and assessments. After being qualified, a referee certificate corresponding to its
                grade will then be issued by the WWSC.
            </p>
            <p>
                2. The grade of Wiser Referee represents its qualification that can be assigned to officiate certain
                levels of Wiser matches/tournaments.
            </p>
            <p>
                3. Official Wiser referees certified by the World Wiser Sport Committee are divided into the following
                four major grades:
            </p>
            <ul className="referee-grade-list">
                <li>Grade 1: International Referee</li>
                <li>Garde 2: National Referee</li>
                <li>Grade 3: State Referee</li>
                <li>Grade 4: Club Referee</li>
            </ul>
        </div>
    );

    const dutyContent = (
        <div className="content">
            <h3 className="referee-header">II. Duties and Responsibilities of a Referee in a Wiser Game</h3>
            <p>1. Enforce the rules of the Wiser sport set by World Wiser Sport Committee (WWSC);</p>
            <p>2. Maintain order and safety in the game and ensure fair competitions;</p>
            <p>
                3. Ensure that the playing field is set up properly and the balls, flags and equipment meet all
                requirements;
            </p>
            <p>4. Ensure that all players follow Wiser etiquette and the spirit of the Wiser sport;</p>
            <p>5. Oversee the processes of the Wiser game and instruct the flag person and the record keeper;</p>
            <p>
                6. Conduct the drawing of lots with team captains to determine which team will serve and also attack
                first after the serving;
            </p>
            <p>
                7. Blow the whistle in the following circumstances: (1) To initiate and conclude the game; (2) Before
                the player initiates any ball actions except “interception”; (3) Before making each hand gesture; (4)
                After fouls are committed; (5) For emergency purposes, to call people’s attention.
            </p>
            <p>8. Make hand gestures for ruling after balls are locked, mishit and struck out;</p>
            <p>9. Enforce penalties after fouls are committed ;</p>
            <p>10. Call upon both teams and announce the game result; and,</p>
            <p>11. Sign and submit the record tracking sheet after the end of game.</p>
        </div>
    );

    const formContent = (
        <div className="content">
            <p>
                <a href="https://worldwisersport.org/pdf/G3_Referee/WWSC-G3_Referee_Work_Record_frm_English_10_24_2015.pdf">
                    WWSC Grade 3 Referee Work Record Form (for the use of Grade 3 Wiser Referee)
                </a>
            </p>
            <p>
                <a href="https://worldwisersport.org/pdf/Referee_Training/WWSC-Referee_Record_frm_12_02_13_E.pdf">
                    WWSC Grade 4 Referee Work Record Form (for the use of Referee-in-Training)
                </a>
            </p>
        </div>
    );

    const content = [
        { title: "Certification System", content: certContent },
        { title: "Duties and Responsibilities", content: dutyContent },
        { title: "Referee Work Record Forms for Download", content: formContent },
    ];

    // =========繁體中文==========
    const certContent_TW = (
        <div className="content">
            <h3 className="referee-header">I. Wiser裁判員認證制度</h3>
            <p>
                1.
                所有級別的正式Wiser裁判員都必需經由世界Wiser運動委員會訓練認證，合格後頒發符合其相應級別的裁判員證書。
            </p>
            <p>2. Wiser裁判員的級別代表該裁判員能被指派擔任何種層級Wiser競賽裁判員的資格。</p>
            <p>3. 世界Wiser運動委員會正式認證的裁判員共分四種主要級別：</p>
            <ul className="referee-grade-list">
                <li>第一級國際級裁判（International Referee）</li>
                <li>第二級國家級裁判（National Referee）</li>
                <li>第三級地區級裁判（State Referee）</li>
                <li>第四級俱樂部級裁判 （Club Referee）</li>
            </ul>
        </div>
    );

    const dutyContent_TW = (
        <div className="content">
            <h3 className="referee-header">II. 裁判員在Wiser比賽中的職責</h3>
            <p>1. 于比賽中執行世界Wiser運動委員會制定的Wiser比賽規則；</p>
            <p>2. 維持場上比賽安全和秩序以及確保比賽隊伍間的公平競爭；</p>
            <p>3. 確定比賽場地妥善佈置和比賽中使用的球，旗子和設備符合比賽規格要求；</p>
            <p>4. 確保參賽球員遵守Wiser 比賽禮儀和符合Wiser運動精神；</p>
            <p>5. 掌握比賽流程並配合插旗員和記錄員以讓比賽順利進行；</p>
            <p>6. 比賽前召集兩隊隊長以抽籤或其他方式，來決定哪隊先發球和發完球后先攻擊；</p>
            <p>
                7. 吹哨的時機:
                （1）比賽開始和比賽結束；（2）球員開始打球動作前（攔擊除外）；（3）裁判員做出任何手勢判決前；（4）比賽中犯規發生時；（5）緊急狀況時希望大家注意。
            </p>
            <p>8. 在球被擊中關住﹑被誤擊，或出局后，立即做出適當的判決手勢；</p>
            <p>9. 在比賽中隊伍或球員犯規后，執行相應的處罰；</p>
            <p>10. 召集兩隊宣佈比賽結果；</p>
            <p>11. 並於比賽結束后，簽署和提交比賽記錄表。</p>
        </div>
    );

    const formContent_TW = (
        <div className="content">
            <p>
                <a href="https://worldwisersport.org/pdf/G3_Referee/WWSC-G3_Referee_Work_Record_frm_Chinese_10_24_2015.pdf">
                    WWSC 第三級裁判工作比賽記錄表 (供第三級裁判員使用)
                </a>
            </p>
            <p>
                <a href="https://worldwisersport.org/pdf/Referee_Training/%E8%A3%81%E5%88%A4%E6%AF%94%E8%B3%BD%E8%A8%98%E9%8C%84%E8%A1%A8_WWSC-Referee_Record_frm_Chinese.pdf">
                    WWSC 第四級裁判工作比賽記錄表 (供見習裁判員使用)
                </a>
            </p>
        </div>
    );

    const content_TW = [
        { title: "認證制度", content: certContent_TW },
        { title: "裁判員比賽職責", content: dutyContent_TW },
        { title: "裁判員比賽記錄表下載", content: formContent_TW },
    ];

    // ======简体中文=====

    const certContent_CN = (
        <div className="content">
            <h3 className="referee-header">I. Wiser裁判员认證制度</h3>
            <p>
                1.
                所有级别的正式Wiser裁判员都必需经由世界Wiser运动委员会训练认證，合格後颁发符合其相应级别的裁判员證书。
            </p>
            <p>2. Wiser裁判员的级别代表该裁判员能被指派担任何种层级Wiser竞赛裁判员的资格。</p>
            <p>3. 世界Wiser运动委员会正式认證的裁判员共分四种主要级别：</p>
            <ul className="referee-grade-list">
                <li>第一级国际级裁判（International Referee）</li>
                <li>第二级国家级裁判（National Referee）</li>
                <li>第叁级地区级裁判（State Referee）</li>
                <li>第四级俱乐部级裁判 （Club Referee）</li>
            </ul>
        </div>
    );

    const dutyContent_CN = (
        <div className="content">
            <h3 className="referee-header">II. 裁判员在Wiser比赛中的职责</h3>
            <p>1. 于比赛中执行世界Wiser运动委员会制定的Wiser比赛规则；</p>
            <p>2. 维持场上比赛安全和秩序以及确保比赛队伍间的公平竞争；</p>
            <p>3. 确定比赛场地妥善佈置和比赛中使用的球，旗子和设备符合比赛规格要求；</p>
            <p>4. 确保参赛球员遵守Wiser 比赛礼仪和符合Wiser运动精神；</p>
            <p>5. 掌握比赛流程并配合插旗员和记录员以让比赛顺利进行；</p>
            <p>6. 比赛前召集两队队长以抽籤或其他方式，来决定哪队先发球和发完球后先攻击；</p>
            <p>
                7. 吹哨的时机:
                （1）比赛开始和比赛结束；（2）球员开始打球动作前（拦击除外）；（3）裁判员做出任何手势判决前；（4）比赛中犯规发生时；（5）紧急状况时希望大家注意。
            </p>
            <p>8. 在球被击中关住﹑被误击，或出局后，立即做出适当的判决手势；</p>
            <p>9. 在比赛中队伍或球员犯规后，执行相应的处罚；</p>
            <p>10. 召集两队宣佈比赛结果；</p>
            <p>11. 并於比赛结束后，签署和提交比赛记录表。</p>
        </div>
    );

    const formContent_CN = (
        <div className="content">
            <p>
                <a href="https://worldwisersport.org/pdf/G3_Referee/WWSC-G3_Referee_Work_Record_frm_Chinese_10_24_2015.pdf">
                    WWSC 第叁级裁判工作比赛记录表 (供第叁级裁判员使用)
                </a>
            </p>
            <p>
                <a href="https://worldwisersport.org/pdf/Referee_Training/%E8%A3%81%E5%88%A4%E6%AF%94%E8%B3%BD%E8%A8%98%E9%8C%84%E8%A1%A8_WWSC-Referee_Record_frm_Chinese.pdf">
                    WWSC 第四级裁判工作比赛记录表 (供见习裁判员使用)
                </a>
            </p>
        </div>
    );

    const content_CN = [
        { title: "认證制度", content: certContent_CN },
        { title: "裁判员比赛职责", content: dutyContent_CN },
        { title: "裁判员比赛记录表下载", content: formContent_CN },
    ];

    return (
        <div>
            <div className="wwsc-container">
                {lang === "en" && (
                    <div className="text-container">
                        <h1>Wiser Referee Training</h1>
                        <CustomTab content={content} />
                    </div>
                )}
                {lang === "zh-TW" && (
                    <div className="text-container">
                        <h1>Wiser裁判員培訓</h1>
                        <CustomTab content={content_TW} />
                    </div>
                )}
                {lang === "zh-CN" && (
                    <div className="text-container">
                        <h1>Wiser裁判员培训</h1>
                        <CustomTab content={content_CN} />
                    </div>
                )}
            </div>
        </div>
    );
}
