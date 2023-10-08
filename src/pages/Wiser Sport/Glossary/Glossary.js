/** @format */

import "./Glossary.css";
import { useTranslation } from "react-i18next";

import CustomTab from "../../../components/CustomTab/CustomTab";
import { Link } from "react-router-dom";

export default function Glossary() {
    const { t, i18n } = useTranslation("global");

    const lang = i18n.language;

    // =================English================

    const orderContent = (
        <div className="w3-container">
            <p style={{ textIndent: "0px" }}>
                The following common terminologies of the Wiser sport are listed based on the order in which they appear
                in the <Link to="/wiser-sport/the-rules-of-wiser-sport/">rules handbook:</Link>
            </p>
            <table className="w3-table w3-bordered">
                <tr className="w3-light-grey">
                    <th>Terminology</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Centerline</td>
                    <td>
                        The “Centerline” is a 12-meter line in the middle between the two teams’ serving lines. The
                        distance between the centerline and each team’s serving line is 12 meters.
                    </td>
                </tr>
                <tr>
                    <td>Referee</td>
                    <td>
                        An official who has the responsibility to enforce the rules of the Wiser sport set by the World
                        Wiser Sport Committee and maintain the order of the game.
                    </td>
                </tr>

                <tr>
                    <td>Record Keeper</td>
                    <td>
                        A person who has the responsibility to record the game’s progress and final outcome on a “Wiser
                        Game Recording Sheet” as well as providing information in response to inquiries from the referee
                        regarding ball statuses, records of fouls committed by the players, and the number of ball
                        settings made by a team.
                    </td>
                </tr>
                <tr>
                    <td>Flag Person</td>
                    <td>
                        A person who has the responsibility to insert or pull out flags according to the ruling of the
                        referee.
                    </td>
                </tr>
                <tr>
                    <td>Ball Serving</td>
                    <td>
                        At the start of a Wiser game, players are launching out their balls to their intended positions
                        for the first time. This is called “Ball Serving.”
                    </td>
                </tr>
                <tr>
                    <td>Serving Lines</td>
                    <td>
                        The standing positions for serving the balls by both teams are called “Serving Lines.” The
                        distance between each team’s serving line and the centerline is 12 meters.
                    </td>
                </tr>
                <tr>
                    <td>Contesting Ball</td>
                    <td>
                        At the start of a Wiser game, all balls are “contesting” balls. Players have the right to use
                        these balls to launch attacks or set the ball.
                    </td>
                </tr>
                <tr>
                    <td>First-Lock</td>
                    <td>
                        When a “contesting” ball is hit for the first time by the opponent’s “contesting” ball, the ball
                        being hit is ruled as “first-locked.” This ball is not allowed to be moved. The flag person will
                        insert a yellow flag next to the “first-locked” ball.
                    </td>
                </tr>
                <tr>
                    <td>Second-Lock</td>
                    <td>
                        If a “first-locked” ball is hit for the 2nd time, its status is changed to “second-locked.” The
                        flag person will replace the yellow flag with the red flag next to the “second-locked” ball.
                    </td>
                </tr>
                <tr>
                    <td>Strike-Out</td>
                    <td>
                        (1) If a “second-locked” ball is hit for the 3rd time, the ball will be “struck-out.” (See
                        “Strike-out”) (2) When a ball hits a ball of its own team, this is called a “Mishit.” The ball
                        that caused the “Mishit” will be “struck out” and will be eliminated from the game. (See
                        “Mishit”)
                    </td>
                </tr>
                <tr>
                    <td>Yellow Flag</td>
                    <td>
                        In the Wiser game, a yellow flag is inserted next to a ball to identify that the ball’s status
                        is “first-locked.” (See “First-Lock”)
                    </td>
                </tr>
                <tr>
                    <td>Red Flag</td>
                    <td>
                        In the Wiser game, a red flag is inserted next to a ball to identify that the ball’s status is
                        “second-locked.”
                    </td>
                </tr>
                <tr>
                    <td>Rescue</td>
                    <td>
                        To rescue any “locked” balls (either “first-locked” or “second-locked” balls), the teammate of
                        the “locked” balls must hit the opponent’s ball(s) that have hit the “locked” balls.
                    </td>
                </tr>
                <tr>
                    <td>Ball Hitting</td>
                    <td>
                        “Ball Hitting” means aiming at and hitting a target ball of the opposing team. The player can
                        roll, toss, or shoot his/her ball to hit the opponent’s ball.
                    </td>
                </tr>
                <tr>
                    <td>Ball Setting</td>
                    <td>
                        When playing the Wiser game, a player can also choose to “set” (or “position”) his/her ball to a
                        special position instead of aiming to hit a ball of the opponent.
                    </td>
                </tr>
                <tr>
                    <td>Capture Zone</td>
                    <td>
                        If one of the two teams has only one contesting ball left, the “Capture Zone” must be set up.
                        The “Capture Zone” is the rectangular area between two teams’ serving lines. Its range is 12
                        meters by 24 meters.
                    </td>
                </tr>
                <tr>
                    <td>Reposition</td>
                    <td>
                        After setting up the Capture Zone, the two teams must “reposition” their remaining contesting
                        balls and locked balls within the Capture Zone respectively. The way to reposition is to pick up
                        the balls from their original positions in the playing field and then arrange them at any
                        locations on a “repositioning line,” which is the line located one meter inside from each team’s
                        serving line.
                    </td>
                </tr>
                <tr>
                    <td>Mishit</td>
                    <td>A ball that hits a ball of its own team is called a “Mishit.”</td>
                </tr>
                <tr>
                    <td>Interception</td>
                    <td>
                        Interception refers to a quick action of blocking when the opposing team is launching an attack.
                        Interception can be used at any time during the game.
                    </td>
                </tr>
            </table>
        </div>
    );

    const alphabetContent = (
        <div className="w3-container">
            <p style={{ textIndent: "0px" }}>
                The following common terminologies of the Wiser sport are listed in
                <i>
                    <u>alphabetical order</u>
                </i>
                :
            </p>

            <table className="w3-table w3-bordered">
                <tr className="w3-light-grey">
                    <th>Terminology</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Ball Hitting</td>
                    <td>
                        “Ball Hitting” means aiming at and hitting a target ball of the opposing team. The player can
                        roll, toss, or shoot his/her ball to hit the opponent’s ball.
                    </td>
                </tr>
                <tr>
                    <td>Ball Setting</td>
                    <td>
                        When playing the Wiser game, a player can also choose to “set” (or “position”) his/her ball to a
                        special position instead of aiming to hit a ball of the opponent.
                    </td>
                </tr>

                <tr>
                    <td>Ball Serving</td>
                    <td>
                        At the start of a Wiser game, players are launching out their balls to their intended positions
                        for the first time. This is called “Ball Serving.”
                    </td>
                </tr>
                <tr>
                    <td>Capture Zone</td>
                    <td>
                        If one of the two teams has only one contesting ball left, the “Capture Zone” must be set up.
                        The “Capture Zone” is the rectangular area between two teams’ serving lines. Its range is 12
                        meters by 24 meters.
                    </td>
                </tr>
                <tr>
                    <td>Centerline</td>
                    <td>
                        The “Centerline” is a 12-meter line in the middle between the two teams’ serving lines. The
                        distance between the centerline and each team’s serving line is 12 meters.
                    </td>
                </tr>
                <tr>
                    <td>Contesting Ball</td>
                    <td>
                        At the start of a Wiser game, all balls are “contesting” balls. Players have the right to use
                        these balls to launch attacks or set the ball.
                    </td>
                </tr>
                <tr>
                    <td>First-Lock</td>
                    <td>
                        A person who has the responsibility to insert or pull out flags according to the ruling of the
                        referee.
                    </td>
                </tr>
                <tr>
                    <td>Flag Person</td>
                    <td>
                        When a “contesting” ball is hit for the first time by the opponent’s “contesting” ball, the ball
                        being hit is ruled as “first-locked.” This ball is not allowed to be moved. The flag person will
                        insert a yellow flag next to the “first-locked” ball.
                    </td>
                </tr>
                <tr>
                    <td>Interception</td>
                    <td>
                        Interception refers to a quick action of blocking when the opposing team is launching an attack.
                        Interception can be used at any time during the game.
                    </td>
                </tr>
                <tr>
                    <td>Mishit</td>
                    <td>A ball that hits a ball of its own team is called a “Mishit.”</td>
                </tr>
                <tr>
                    <td>Record Keeper</td>
                    <td>
                        A person who has the responsibility to record the game’s progress and final outcome on a “Wiser
                        Game Recording Sheet” as well as providing information in response to inquiries from the referee
                        regarding ball statuses, records of fouls committed by the players, and the number of ball
                        settings made by a team.
                    </td>
                </tr>
                <tr>
                    <td>Red Flag</td>
                    <td>
                        In the Wiser game, a red flag is inserted next to a ball to identify that the ball’s status is
                        “second-locked.”
                    </td>
                </tr>
                <tr>
                    <td>Referee</td>
                    <td>
                        An official who has the responsibility to enforce the rules of the Wiser sport set by the World
                        Wiser Sport Committee and maintain the order of the game.
                    </td>
                </tr>
                <tr>
                    <td>Reposition</td>
                    <td>
                        After setting up the Capture Zone, the two teams must “reposition” their remaining contesting
                        balls and locked balls within the Capture Zone respectively. The way to reposition is to pick up
                        the balls from their original positions in the playing field and then arrange them at any
                        locations on a “repositioning line,” which is the line located one meter inside from each team’s
                        serving line.
                    </td>
                </tr>
                <tr>
                    <td>Rescue</td>
                    <td>
                        To rescue any “locked” balls (either “first-locked” or “second-locked” balls), the teammate of
                        the “locked” balls must hit the opponent’s ball(s) that have hit the “locked” balls.
                    </td>
                </tr>
                <tr>
                    <td>Second-Lock</td>
                    <td>
                        If a “first-locked” ball is hit for the 2nd time, its status is changed to “second-locked.” The
                        flag person will replace the yellow flag with the red flag next to the “second-locked” ball.
                    </td>
                </tr>
                <tr>
                    <td>Serving Lines</td>
                    <td>
                        The standing positions for serving the balls by both teams are called “Serving Lines.” The
                        distance between each team’s serving line and the centerline is 12 meters.
                    </td>
                </tr>
                <tr>
                    <td>Strike-Out</td>
                    <td>
                        (1) If a “second-locked” ball is hit for the 3rd time, the ball will be “struck-out.” (See
                        “Strike-out”) (2) When a ball hits a ball of its own team, this is called a “Mishit.” The ball
                        that caused the “Mishit” will be “struck out” and will be eliminated from the game. (See
                        “Mishit”)
                    </td>
                </tr>
                <tr>
                    <td>Yellow Flag</td>
                    <td>
                        In the Wiser game, a yellow flag is inserted next to a ball to identify that the ball’s status
                        is “first-locked.” (See “First-Lock”)
                    </td>
                </tr>
            </table>
        </div>
    );

    const content = [
        { title: t("terms.tab_rule"), content: orderContent },
        { title: t("terms.tab_abc"), content: alphabetContent },
    ];

    // =================繁體中文================

    const orderContent_zh_TW = (
        <div className="w3-container">
            <p style={{ textIndent: "0px" }}>
                以下Wiser運動比賽常用的專業術語，是按照其於{" "}
                <Link to="/wiser-sport/the-rules-of-wiser-sport/">規則手冊</Link>
                中出現的先後順序排列:
            </p>
            <table className="w3-table w3-bordered">
                <tr className="w3-light-grey">
                    <th>專業術語</th>
                    <th>內容</th>
                </tr>
                <tr>
                    <td>中界線</td>
                    <td>12米長的中界線是一條介於紅、白兩隊發球線各為12米的中間線。</td>
                </tr>
                <tr>
                    <td>裁判員</td>
                    <td>
                        裁判員負責中立主持Wiser比賽，執行世界Wiser
                        運動委員會頒訂的Wiser規則來判定各種比賽狀況和維護球場秩序。
                    </td>
                </tr>

                <tr>
                    <td>記錄員</td>
                    <td>
                        記錄員負責將比賽過程和最後結果記錄在“Wiser比賽記錄表”上，並提供裁判員關於球是否被「初關」、「二關」或「誤擊」和被「解救」的記錄諮詢；以及負責記載比賽球員的犯規記錄和球隊佈陣的次數。
                    </td>
                </tr>
                <tr>
                    <td>插旗員</td>
                    <td>插旗員於比賽中依裁判員判定結果後，負責插旗和拔旗的工作。</td>
                </tr>
                <tr>
                    <td>發球</td>
                    <td>比賽開始時，球員第一次將球打出佈陣，稱為「發球」。</td>
                </tr>
                <tr>
                    <td>發球線</td>
                    <td>兩隊在發球時所站的位置，稱為「發球線」。每隊發球線距離中界線的位置各為12米。</td>
                </tr>
                <tr>
                    <td>競技球</td>
                    <td>
                        比賽開始，所有球都是「競技球」，都有進攻權！「競技球」就是沒有被關住的球，球員可將「競技球」自由地擊球或佈陣。
                    </td>
                </tr>
                <tr>
                    <td>初關</td>
                    <td>
                        當「競技球」被擊中第一次時，被擊中的球就被判「初關」，球就不能動了。插旗員會在被「初關」的球旁插上黃旗。
                    </td>
                </tr>
                <tr>
                    <td>二關</td>
                    <td>
                        當「初關」的球之後再被擊中第二次，該「初關」球就變成「二關」，插旗員會在「二關」的球旁改插上紅旗。
                    </td>
                </tr>
                <tr>
                    <td>出局</td>
                    <td>
                        (1) 當「二關」的球之後再被球擊中第三次，該球的球員就被判為「出局」; (2)
                        球誤擊中同隊隊友的球，該球也被判為「出局」。(見 “誤擊”)
                    </td>
                </tr>
                <tr>
                    <td>黃旗</td>
                    <td>在Wiser比賽中，黃旗插在球的旁邊，用來標示這顆球是被「初關」。 (見“初關” )</td>
                </tr>
                <tr>
                    <td>紅旗</td>
                    <td>在Wiser比賽中，紅旗插在球的旁邊，用來標示這顆球是被「二關」。 (見“ 二關” )</td>
                </tr>
                <tr>
                    <td>解救</td>
                    <td>要解救任何被關住的球 （不論是初關或二關），被關住球的同隊隊友必須擊中對方讓它關住的球。</td>
                </tr>
                <tr>
                    <td>擊球</td>
                    <td>擊球是以瞄準擊中對方的球為目的，將自己的球用滾動或拋射的方式去擊中對方的球。</td>
                </tr>
                <tr>
                    <td>佈球</td>
                    <td>佈球是一種比賽戰略上的考量，將球打出佈陣到特別的位置，而不是企圖擊中對方的球。</td>
                </tr>
                <tr>
                    <td>圍捕線</td>
                    <td>
                        當其中一隊只剩下一顆競技球時，就要設定「圍捕線」。「圍捕線」的範圍是是兩隊發球線之間12米x
                        24米的矩形範圍。
                    </td>
                </tr>
                <tr>
                    <td>重新定位</td>
                    <td>
                        設定圍捕線後，兩隊必須將剩下的競技球和被關起來的球分別在圍捕線內「重新定位」。重新定位的方法，是將球從原球位拿起放在距離原來每隊各自發球線，向內約1米的「重新定位線」上任意排列。
                    </td>
                </tr>
                <tr>
                    <td>誤擊</td>
                    <td>當自己的球打中同隊的球，稱為「誤擊」。</td>
                </tr>
                <tr>
                    <td>攔擊</td>
                    <td>攔擊是指對方進攻我方的時候，我方採取的及時阻攔。攔擊在球場比賽競技中任何時候均可使用。</td>
                </tr>
            </table>
        </div>
    );

    const alphabetContent_zh_TW = (
        <div className="w3-container">
            <p style={{ textIndent: "0px" }}>
                以下Wiser運動比賽常用的專業術語，是按照其於第一個字的
                <i>
                    <u>英文字母順序排列:</u>
                </i>
                :
            </p>

            <table className="w3-table w3-bordered">
                <tr className="w3-light-grey">
                    <th>專業術語</th>
                    <th>內容</th>
                </tr>
                <tr>
                    <td>擊球</td>
                    <td>擊球是以瞄準擊中對方的球為目的，將自己的球用滾動或拋射的方式去擊中對方的球。</td>
                </tr>
                <tr>
                    <td>佈球</td>
                    <td>佈球是一種比賽戰略上的考量，將球打出佈陣到特別的位置，而不是企圖擊中對方的球。</td>
                </tr>

                <tr>
                    <td>發球</td>
                    <td>比賽開始時，球員第一次將球打出佈陣，稱為「發球」。</td>
                </tr>
                <tr>
                    <td>圍捕線</td>
                    <td>
                        當其中一隊只剩下一顆競技球時，就要設定「圍捕線」。「圍捕線」的範圍是是兩隊發球線之間12米x
                        24米的矩形範圍。
                    </td>
                </tr>
                <tr>
                    <td>中界線</td>
                    <td>12米長的中界線是一條介於紅、白兩隊發球線各為12米的中間線。</td>
                </tr>
                <tr>
                    <td>競技球</td>
                    <td>
                        比賽開始，所有球都是「競技球」，都有進攻權！「競技球」就是沒有被關住的球，球員可將「競技球」自由地擊球或佈陣。
                    </td>
                </tr>
                <tr>
                    <td>初關</td>
                    <td>
                        當「競技球」被擊中第一次時，被擊中的球就被判「初關」，球就不能動了。插旗員會在被「初關」的球旁插上黃旗。
                    </td>
                </tr>
                <tr>
                    <td>插旗員</td>
                    <td>插旗員於比賽中依裁判員判定結果後，負責插旗和拔旗的工作。</td>
                </tr>
                <tr>
                    <td>攔擊</td>
                    <td>攔擊是指對方進攻我方的時候，我方採取的及時阻攔。攔擊在球場比賽競技中任何時候均可使用。</td>
                </tr>
                <tr>
                    <td>誤擊</td>
                    <td>當自己的球打中同隊的球，稱為「誤擊」。</td>
                </tr>
                <tr>
                    <td>記錄員</td>
                    <td>
                        記錄員負責將比賽過程和最後結果記錄在“Wiser比賽記錄表”上，並提供裁判員關於球是否被「初關」、「二關」或「誤擊」和被「解救」的記錄諮詢；以及負責記載比賽球員的犯規記錄和球隊佈陣的次數。
                    </td>
                </tr>
                <tr>
                    <td>紅旗</td>
                    <td>在Wiser比賽中，紅旗插在球的旁邊，用來標示這顆球是被「二關」。</td>
                </tr>
                <tr>
                    <td>裁判員</td>
                    <td>
                        裁判員負責中立主持Wiser比賽，執行世界Wiser
                        運動委員會頒訂的Wiser規則來判定各種比賽狀況和維護球場秩序。
                    </td>
                </tr>
                <tr>
                    <td>重新定位</td>
                    <td>
                        設定圍捕線後，兩隊必須將剩下的競技球和被關起來的球分別在圍捕線內「重新定位」。重新定位的方法，是將球從原球位拿起放在距離原來每隊各自發球線，向內約1米的「重新定位線」上任意排列。
                    </td>
                </tr>
                <tr>
                    <td>解救</td>
                    <td>要解救任何被關住的球（不論是初關或二關），被關住球的同隊隊友必須擊中對方讓它關住的球。</td>
                </tr>
                <tr>
                    <td>二關</td>
                    <td>
                        當「初關」的球之後再被擊中第二次，該「初關」球就變成「二關」，插旗員會在「二關」的球旁改插上紅旗。
                    </td>
                </tr>
                <tr>
                    <td>發球線</td>
                    <td>兩隊在發球時所站的位置，稱為「發球線」。每隊發球線距離中界線的位置各為12米。</td>
                </tr>
                <tr>
                    <td>出局</td>
                    <td>
                        (1) 當「二關」的球之後再被球擊中第三次，該球的球員就被判為「出局」; (2)
                        球誤擊中同隊隊友的球，該球也被判為「出局」。(見 “誤擊”)
                    </td>
                </tr>
                <tr>
                    <td>黃旗</td>
                    <td>在Wiser比賽中，黃旗插在球的旁邊，用來標示這顆球是被「初關」。 (見“初關”)</td>
                </tr>
            </table>
        </div>
    );

    const content_zh_TW = [
        { title: t("terms.tab_rule"), content: orderContent_zh_TW },
        { title: t("terms.tab_abc"), content: alphabetContent_zh_TW },
    ];

    // =================简体中文================

    const orderContent_zh_CN = (
        <div className="w3-container">
            <p style={{ textIndent: "0px" }}>
                以下Wiser运动比赛常用的专业术语，是按照其於{" "}
                <Link to="/wiser-sport/the-rules-of-wiser-sport/">规则手册</Link>
                中出现的先後顺序排列:
            </p>
            <table className="w3-table w3-bordered">
                <tr className="w3-light-grey">
                    <th>专业术语</th>
                    <th>内容</th>
                </tr>
                <tr>
                    <td>中界线</td>
                    <td>12米长的中界线是一条介於红、白两队发球线各为12米的中间线。</td>
                </tr>
                <tr>
                    <td>裁判员</td>
                    <td>
                        裁判员负责中立主持Wiser比赛，执行世界Wiser
                        运动委员会颁订的Wiser规则来判定各种比赛状况和维护球场秩序。
                    </td>
                </tr>

                <tr>
                    <td>记录员</td>
                    <td>
                        记录员负责将比赛过程和最後结果记录在“Wiser比赛记录表”上，并提供裁判员关於球是否被「初关」、「二关」或「误击」和被「解救」的记录谘询；以及负责记载比赛球员的犯规记录和球队佈阵的次数。
                    </td>
                </tr>
                <tr>
                    <td>插旗员</td>
                    <td>插旗员於比赛中依裁判员判定结果後，负责插旗和拔旗的工作。</td>
                </tr>
                <tr>
                    <td>发球</td>
                    <td>比赛开始时，球员第一次将球打出佈阵，称为「发球」。</td>
                </tr>
                <tr>
                    <td>发球线</td>
                    <td>两队在发球时所站的位置，称为「发球线」。每队发球线距离中界线的位置各为12米。</td>
                </tr>
                <tr>
                    <td>竞技球</td>
                    <td>
                        比赛开始，所有球都是「竞技球」，都有进攻权！「竞技球」就是没有被关住的球，球员可将「竞技球」自由地击球或佈阵。
                    </td>
                </tr>
                <tr>
                    <td>初关</td>
                    <td>
                        当「竞技球」被击中第一次时，被击中的球就被判「初关」，球就不能动了。插旗员会在被「初关」的球旁插上黄旗。
                    </td>
                </tr>
                <tr>
                    <td>二关</td>
                    <td>
                        当「初关」的球之後再被击中第二次，该「初关」球就变成「二关」，插旗员会在「二关」的球旁改插上红旗。
                    </td>
                </tr>
                <tr>
                    <td>出局</td>
                    <td>
                        (1) 当「二关」的球之後再被球击中第叁次，该球的球员就被判为「出局」; (2)
                        球误击中同队队友的球，该球也被判为「出局」。(见 “误击”)
                    </td>
                </tr>
                <tr>
                    <td>黄旗</td>
                    <td>在Wiser比赛中，黄旗插在球的旁边，用来标示这颗球是被「初关」。 (见“初关” )</td>
                </tr>
                <tr>
                    <td>红旗</td>
                    <td>在Wiser比赛中，红旗插在球的旁边，用来标示这颗球是被「二关」。 (见“ 二关” )</td>
                </tr>
                <tr>
                    <td>解救</td>
                    <td>要解救任何被关住的球 （不论是初关或二关），被关住球的同队队友必须击中对方让它关住的球。</td>
                </tr>
                <tr>
                    <td>击球</td>
                    <td>击球是以瞄準击中对方的球为目的，将自己的球用滚动或抛射的方式去击中对方的球。</td>
                </tr>
                <tr>
                    <td>佈球</td>
                    <td>佈球是一种比赛战略上的考量，将球打出佈阵到特别的位置，而不是企图击中对方的球。</td>
                </tr>
                <tr>
                    <td>围捕线</td>
                    <td>
                        当其中一队只剩下一颗竞技球时，就要设定「围捕线」。「围捕线」的範围是是两队发球线之间12米x
                        24米的矩形範围。
                    </td>
                </tr>
                <tr>
                    <td>重新定位</td>
                    <td>
                        设定围捕线後，两队必须将剩下的竞技球和被关起来的球分别在围捕线内「重新定位」。重新定位的方法，是将球从原球位拿起放在距离原来每队各自发球线，向内约1米的「重新定位线」上任意排列。
                    </td>
                </tr>
                <tr>
                    <td>误击</td>
                    <td>当自己的球打中同队的球，称为「误击」。</td>
                </tr>
                <tr>
                    <td>拦击</td>
                    <td>拦击是指对方进攻我方的时候，我方采取的及时阻拦。拦击在球场比赛竞技中任何时候均可使用。</td>
                </tr>
            </table>
        </div>
    );
    const alphabetContent_zh_CN = (
        <div className="w3-container">
            <p style={{ textIndent: "0px" }}>
                以下Wiser运动比赛常用的专业术语，是按照其於第一个字的
                <i>
                    <u>英文字母顺序排列:</u>
                </i>
                :
            </p>

            <table className="w3-table w3-bordered">
                <tr className="w3-light-grey">
                    <th>专业术语</th>
                    <th>内容</th>
                </tr>
                <tr>
                    <td>击球</td>
                    <td>击球是以瞄準击中对方的球为目的，将自己的球用滚动或抛射的方式去击中对方的球。</td>
                </tr>
                <tr>
                    <td>佈球</td>
                    <td>佈球是一种比赛战略上的考量，将球打出佈阵到特别的位置，而不是企图击中对方的球。</td>
                </tr>

                <tr>
                    <td>发球</td>
                    <td>比赛开始时，球员第一次将球打出佈阵，称为「发球」。</td>
                </tr>
                <tr>
                    <td>围捕线</td>
                    <td>
                        当其中一队只剩下一颗竞技球时，就要设定「围捕线」。「围捕线」的範围是是两队发球线之间12米x
                        24米的矩形範围。
                    </td>
                </tr>
                <tr>
                    <td>中界线</td>
                    <td>12米长的中界线是一条介於红、白两队发球线各为12米的中间线。</td>
                </tr>
                <tr>
                    <td>竞技球</td>
                    <td>
                        比赛开始，所有球都是「竞技球」，都有进攻权！「竞技球」就是没有被关住的球，球员可将「竞技球」自由地击球或佈阵。
                    </td>
                </tr>
                <tr>
                    <td>初关</td>
                    <td>
                        当「竞技球」被击中第一次时，被击中的球就被判「初关」，球就不能动了。插旗员会在被「初关」的球旁插上黄旗。
                    </td>
                </tr>
                <tr>
                    <td>插旗员</td>
                    <td>插旗员於比赛中依裁判员判定结果後，负责插旗和拔旗的工作。</td>
                </tr>
                <tr>
                    <td>拦击</td>
                    <td>拦击是指对方进攻我方的时候，我方采取的及时阻拦。拦击在球场比赛竞技中任何时候均可使用。</td>
                </tr>
                <tr>
                    <td>误击</td>
                    <td>当自己的球打中同队的球，称为「误击」。</td>
                </tr>
                <tr>
                    <td>记录员</td>
                    <td>
                        记录员负责将比赛过程和最後结果记录在“Wiser比赛记录表”上，并提供裁判员关於球是否被「初关」、「二关」或「误击」和被「解救」的记录谘询；以及负责记载比赛球员的犯规记录和球队佈阵的次数。
                    </td>
                </tr>
                <tr>
                    <td>红旗</td>
                    <td>在Wiser比赛中，红旗插在球的旁边，用来标示这颗球是被「二关」。</td>
                </tr>
                <tr>
                    <td>裁判员</td>
                    <td>
                        裁判员负责中立主持Wiser比赛，执行世界Wiser
                        运动委员会颁订的Wiser规则来判定各种比赛状况和维护球场秩序。
                    </td>
                </tr>
                <tr>
                    <td>重新定位</td>
                    <td>
                        设定围捕线後，两队必须将剩下的竞技球和被关起来的球分别在围捕线内「重新定位」。重新定位的方法，是将球从原球位拿起放在距离原来每队各自发球线，向内约1米的「重新定位线」上任意排列。
                    </td>
                </tr>
                <tr>
                    <td>解救</td>
                    <td>要解救任何被关住的球（不论是初关或二关），被关住球的同队队友必须击中对方让它关住的球。</td>
                </tr>
                <tr>
                    <td>二关</td>
                    <td>
                        当「初关」的球之後再被击中第二次，该「初关」球就变成「二关」，插旗员会在「二关」的球旁改插上红旗。
                    </td>
                </tr>
                <tr>
                    <td>发球线</td>
                    <td>两队在发球时所站的位置，称为「发球线」。每队发球线距离中界线的位置各为12米。</td>
                </tr>
                <tr>
                    <td>出局</td>
                    <td>
                        (1) 当「二关」的球之後再被球击中第叁次，该球的球员就被判为「出局」; (2)
                        球误击中同队队友的球，该球也被判为「出局」。(见 “误击”)
                    </td>
                </tr>
                <tr>
                    <td>黄旗</td>
                    <td>在Wiser比赛中，黄旗插在球的旁边，用来标示这颗球是被「初关」。 (见“初关”)</td>
                </tr>
            </table>
        </div>
    );

    const content_zh_CN = [
        { title: t("terms.tab_rule"), content: orderContent_zh_CN },
        { title: t("terms.tab_abc"), content: alphabetContent_zh_CN },
    ];
    return (
        <div>
            <div className="wwsc-container">
                <div className="img-text-container">
                    <h1>{t("terms.title")}</h1>
                    {lang === "en" && <CustomTab content={content} />}
                    {lang === "zh-TW" && <CustomTab content={content_zh_TW} />}
                    {lang === "zh-CN" && <CustomTab content={content_zh_CN} />}
                </div>
            </div>
        </div>
    );
}
