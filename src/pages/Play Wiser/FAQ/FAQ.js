/** @format */

import CustomTab from "../../../components/CustomTab/CustomTab";
import TextDrop from "./TextDrop";
import { useTranslation } from "react-i18next";

import "./FAQ.css";

export default function FAQ() {
    const { i18n } = useTranslation("global");

    const lang = i18n.language;

    // =============English========
    const generalContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. Is there any time limit for an official Wiser game?"
                text={
                    <p>
                        Except for Phase I of Ball Serving, there is a one-minute time limit for tactical discussion for
                        each team’s turn to attack. Otherwise, there is no time limit for an official Wiser ball game!
                    </p>
                }
            />

            <TextDrop
                title="2. Is there any range/area limit for the playing field in an official Wiser game?"
                text={
                    <p>
                        Except when two teams are contesting within the Capture Zone, the game area will be limited
                        within the rectangular area of 12 m x 24 m. Otherwise, the playing field of an official Wiser
                        game has no range/area limit and can be played based on whatever landscape is available.
                    </p>
                }
            />
        </div>
    );

    const serveContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. Before ball serving, is it required in an official Wiser game to use the drawing of lots to determine which team will serve first?"
                text={
                    <p>
                        For fair competition in an official Wiser game, the captains from both teams may draw lots to
                        determine which team will serve first. However, for convenience, other methods like coin tossing
                        or “rock, paper, scissors” can also be used during the regular games or practices to determine
                        which team will serve first as long as the hosting organization and both teams agree these
                        methods.
                    </p>
                }
            />

            <TextDrop
                title="2. During ball serving, is it required to serve the balls to be positioned inside the 12 m x 24 m rectangular area enclosed by two teams’ serving lines?"
                text={
                    <p>
                        There is no fixed direction, path, or distance for serving the ball. A ball can be served
                        anywhere within the entire playing field. Balls do not have to be served and rest inside the
                        rectangular area enclosed by two teams’ serving lines. (Please refer to General, Question 2)
                    </p>
                }
            />

            <TextDrop
                title="3. During ball serving, is there any penalty for a player who serves and continuously hits the opponent’s balls—for example, should the player be eliminated if he/she served the ball and hit the opponent’s ball(s) three consecutive times?"
                text={
                    <p>
                        According to the rules of ball serving, if the ball being served hits any ball of the opposing
                        team or the player’s own team, the serving will be considered as “invalid”. The ball that got
                        hit will be placed back to its original position. Then the player serving the ball will take
                        back his or her ball and re-serve again. The referee may remind the player to be careful and not
                        to hit any balls again when re-serving. However, so far there is no penalty for the player who
                        serves and continuously hits the opponent’s balls. Therefore, the player won’t be eliminated if
                        he/she serves the ball and hit the opponent’s ball(s) three consecutive times.
                    </p>
                }
            />
        </div>
    );

    const gameContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. Does the one-minute time limit for tactical discussion by the attacking team include the time of launching the ball out by the team’s player?"
                text={
                    <p>
                        According to the current rules, the one-minute time limit for tactical discussion does not
                        include the time of launching the ball out by the player of the attacking team. However, when
                        the one-minute time almost expires, the attacking team must have decided which player will
                        attack and that designated player must pick up the ball and hold it in his/her hand, ready to
                        attack or set the ball. Otherwise, if the attacking player has not picked up the ball after
                        exceeding the one-minute time limit, the attacking team will be cited as committing a foul. The
                        team that committed the foul will lose its turn to attack.
                    </p>
                }
            />

            <TextDrop
                title="2. When attacking, can the player arbitrarily request to move or temporarily pull up any flag(s) as long as the player considers that the flag(s) is/are blocking the intended traveling route of his/her attacking ball?"
                text={
                    <p>
                        According to the rules, if the attacking player considers that any flag(s) in the playing field
                        is/are blocking the intended traveling route of his/her attacking ball, the attacking player may
                        request to temporarily relocate those flag(s). Only after the request has been approved by the
                        referee can the flag person can move the flag(s) to another spot or temporarily pull up the
                        flag(s) to clear the way for the attacking ball. Any flag(s) that was/were pulled up must be
                        reinserted into its/their original position(s) after the attack is completed. Other than this
                        rule, the player cannot use other reason(s) to request to move flag(s).
                    </p>
                }
            />

            <TextDrop
                title="3. After a player has picked up the ball but has not launched the ball out for attacking or setting the ball, can this player put his/her ball back down to change the direction of attack or allow another player of his/her team to attack instead?"
                text={
                    <p>
                        According to the rules, when a team has its turn to attack, the team has a tactical discussion
                        of up to one minute to decide which player should attack. Once this designated player has picked
                        up the ball and is ready to attack or set the ball, he or she is not allowed to put the ball
                        down to change the direction of attack or to allow another player of his/her team to attack
                        instead.
                    </p>
                }
            />

            <TextDrop
                title="4. Let’s say a certain number ball of the opposing team hit multiple balls of our team at different times. Later, this opponent’s ball was hit by our team once. Can the multiple balls of our team being hit and locked by that opponent’s ball all be rescued?"
                text={
                    <p>
                        Let’s say, for example, that the Red 5 has hit and locked the White 4 first and then
                        subsequently hit the White 7. Later in the game, if the Red 5 was hit by the White 3, the hit on
                        the Red 5 could only be used to rescue the White 4 first and could not rescue both the White 4
                        and the White 7 all at once. Only until the Red 5 was hit again by any White ball could the
                        White 7 can then be rescued. This is because hitting the opponent’s ball once can only be used
                        to rescue one ball at a time. The principle is: Whichever ball got hit and locked by the
                        opponent’s ball first will be rescued first. To rescue the balls of our team that were locked by
                        an opponent’s ball, the order of rescuing is determined by the chronological order of the balls
                        being hit.{" "}
                    </p>
                }
            />

            <TextDrop
                title="5. How can a locked ball of our team be rescued after the opponent’s ball that previously hit and locked it has been struck out by the ball(s) of our team (or due to a “Mishit”)?"
                text={
                    <p>
                        For example, let’s say the Red 6 was hit and locked by the White 3. Later in the game, the White
                        3 was struck out from the game. To rescue the Red 6, the Red team has to hit any White ball (can
                        be a contesting ball or a locked ball) to replace the struck-out White 3. However, the White
                        ball(s) being hit cannot lock any Red ball(s) at that time. Otherwise, any Red ball locked by
                        that White ball being hit must be rescued first.
                    </p>
                }
            />

            <TextDrop
                title="6. Are there any priorities for rescuing locked balls?"
                text={
                    <p>
                        If a certain number ball of Team A was hit by a ball of Team B, the priorities to rescue the
                        “locked” balls of Team B are as follows：
                        <br />
                        (1) The ball(s) of Team B that were hit and locked by this ball of Team A will be rescued first.
                        If more than one ball of Team B have been hit by this ball of Team A, the one that was hit first
                        will be rescued first. (Please see Question 4)
                        <br />
                        (2) If this ball of Team A that got hit did not lock any ball of Team B, the hit it got can then
                        be used to rescue the ball of team B that was locked by another ball of team A which has been
                        struck out from the game. (Please see Question 5)
                        <br />
                        (3) If all locked balls mentioned in (1) and (2) above have been rescued, the hit on that ball
                        of Team A can then be used to rescue the ball of Team B that was locked due to a “Mishit.”
                        (Please see “How to Rescue a Ball Locked Due to a Mishit”)
                    </p>
                }
            />
            <hr />
            <h5 style={{ color: "tomato" }}>The attacking ball hits more than one ball in one attack:</h5>

            <TextDrop
                title="7. When a certain number ball of Team A attacked, it continuously hit more than one ball of the opposing team. Let’s say, for example, that in its attack, the White 1 first hit the Red 3 and then successively hit the Red 6. How should this situation be ruled?"
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ7.png" alt="FAQ 7"/> According to the rules, the successive hits on the Red 3 and
                        the Red 6 by the White 1 are both valid. This is called a “double-hit.” In this example, both
                        the Red 3 and the Red 6 will be “first-locked” with yellow flags inserted next to them.
                    </p>
                }
            />

            <TextDrop
                title="8. When a certain number ball of Team A attacked, it first hit a ball of the opposing team and then successively hit a ball of its own team. Let’s say, for example, that the Red 5 first hit the White 2 and then successively hit its teammate’s the Red 7. How should this situation be ruled?"
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ8.png" alt="FAQ 8"/> According to the rules, the hit on the White 2 by the Red 5
                        is a valid hit, causing the White 2 to be “first-locked” with a yellow flag. However, its
                        successive hit on the Red 7 is an “invalid” hit. The principle is: As long as the attacking ball
                        first hits an opponent’s ball, the successive hit on the ball of its own team will not be
                        considered as a “Mishit.”
                    </p>
                }
            />

            <TextDrop
                title="9. When a certain number ball of Team A attacked, it first mishit a ball of its own team and then successively hit a ball of the opposing team. For example, the Red 5 in its attack first mishit the Red 7 and then hit the White 2. How should this situation be ruled?"
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ9.png" alt="FAQ 9"/> According to the rules, the Mishit on the White 2 by the Red
                        5 is a valid hit, causing the Red 5 to be ruled “struck out” and eliminated from the game. Also,
                        the Red 7 will be ruled as “first-locked” with a yellow flag. Because the Red 5 has already been
                        eliminated from the game right after committing a Mishit, its successive hit on the White 2 is
                        an “invalid” hit.
                    </p>
                }
            />

            <TextDrop
                title="10. When a certain number ball of Team A attacked, it first hit a ball of the opposing team and caused the ball being hit to move and hit another ball. For example, let’s say the White 1 attacked and hit the Red 3. Then the Red 3 being hit has moved and hit the Red 6. How should the following situation be ruled?"
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ10.png" alt="FAQ 10"/> According to the rules, the first hit on the Red 3 by the
                        White 1 is a valid hit, causing the Red 3 to be “first-locked” with a yellow flag. Subsequently,
                        the “first-locked” Red 3’s hit on other ball(s) (the Red 6, in this example) is invalid.
                    </p>
                }
            />
        </div>
    );

    const captureZoneContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. Is it true that once the “Capture Zone” is set up, it will last until the end of the game and never be removed?"
                text={
                    <p>
                        The “Capture Zone” is required to be set up when one of the two teams has only one contesting
                        ball left. Therefore, if this condition is no longer valid, the “Capture Zone” will be removed!
                        For example, let’s say that when playing within the “Capture Zone,” the team that has only one
                        contesting ball left made a successful hit on a ball of the opposing team to cause a teammate to
                        be rescued. This team now has two contesting balls. At this time, the “Capture Zone” will be
                        removed!.
                    </p>
                }
            />
        </div>
    );

    const mishitContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. When a ball of the opposing team gets locked due to a Mishit, can this hit be used to rescue a ball of our team that was hit and locked by this opponent’s ball? For example, let’s say the Red 5 mishit the Red 3, causing the Red 5 to be eliminated from the game and the Red 3 to be “first-locked.” Can this mishit on the Red 3 be used to rescue the White 6, which was hit and locked by the Red 3 earlier? "
                text={
                    <p>
                        According to the rules, to rescue the White 6 which was hit and locked by the Red 3, the White
                        team must hit the Red 3. Therefore, the Mishit on the Red 3 by the Red 5 cannot be used to
                        rescue the White 6.
                    </p>
                }
            />
        </div>
    );

    const interceptionContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. Is it true that only the captain of each team can issue the instruction for an “interception”?"
                text={
                    <p>
                        According to the current rules, to prevent any confusion, only the captain of each team can
                        issue the instruction for an “interception.”
                    </p>
                }
            />

            <TextDrop
                title="2. When the opponent’s ball is attacking, our team can make an “interception.” Which team will attack next after the interception has been made?"
                text={
                    <p>
                        Let’s say, for example, when the Red team is attacking, the White team can make an
                        “interception.” Regardless of whether or not the interception is successful, as long as the
                        player for interception launched the ball out, it is counted as an attack by the White team. So,
                        after interception, it will be the turn of the Red team to attack next.
                    </p>
                }
            />

            <TextDrop
                title="3. If, when making an interception, the ball does not hit the opponent’s ball to be intercepted but accidentally hit another ball(s), is this still a valid hit?"
                text={
                    <p>
                        Let’s say, for example, that when a Red ball is attacking, a White ball can make an
                        interception. If the ball of the White team for interception does not hit the Red ball to be
                        intercepted but unexpectedly hits another Red ball, this hit is still valid. However, if this
                        White ball hit another White ball, it will be ruled as a “Mishit.”
                    </p>
                }
            />

            <TextDrop
                title="4. Is there a time limit for a player to make an interception or any proper timing to launch the ball out for a successful interception?"
                text={
                    <p>
                        According to the rules, there is neither a time limit for a player to make an interception nor
                        any proper timing when a ball should be launched out for a successful interception.However,
                        there are “valid” and “invalid” timings for an interception to be made, and these are described
                        as follows:
                        <br />
                        • “Valid” Timing for Interception: The valid timing for interception is the time interval
                        beginning from the time when the attacking ball was launched out to the time when that attacking
                        ball is approaching but has not yet hit the ball being attacked.
                        <br />
                        • “Invalid” Timing for Interception:
                        <br />
                        <br />
                        (1) The player, in an attempt to make an interception, launched the ball out before the opposing
                        team’s attacking player does
                        <br />
                        (2) The player, in an attempt to make an interception, launched the ball out after the opposing
                        team’s attacking ball has already stopped or gone past the ball of our team being attacked
                        <br />
                        These are not only invalid interceptions, but are also commissions of fouls！
                    </p>
                }
            />
        </div>
    );

    const content = [
        { title: "General", content: generalContent },
        { title: "Ball Serving", content: serveContent },
        { title: "Game Contesting", content: gameContent },
        { title: "Capture Zone", content: captureZoneContent },
        { title: "Mishit", content: mishitContent },
        { title: "Interception", content: interceptionContent },
    ];

    // =========繁體中文==========
    const generalContent_TW = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 請問正式Wiser比賽，有沒有時間上的限制？"
                text={
                    <p>
                        除了第一階段發球外，每隊輪到進攻時有1分鐘戰術討論的時間限制。除此之外，正式Wiser比賽基本上並沒有時間上的限制!
                    </p>
                }
            />

            <TextDrop
                title="2. 請問正式Wiser比賽，有沒有場地範圍上的限制？"
                text={
                    <p>
                        除了在「圍捕線」內競技，比賽場地會有12米x
                        24米的矩形範圍限制外，正式Wiser比賽並沒有場地和範圍上的限制!
                        一般來說，Wiser比賽場地是不限大小，可因地制宜。
                    </p>
                }
            />
        </div>
    );

    const serveContent_TW = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 請問正式Wiser比賽“發球”前，是否一定要用抽籤的方式來決定那一隊先發球嗎？"
                text={
                    <p>
                        為了公平起見，正式Wiser比賽是由兩隊隊長抽籤決定哪一隊先發球。但如果是一般比賽或練習時，只要主辦單位以及比賽隊伍同意，爲了方便也可採取其他方法:
                        例如猜擲銅板或猜拳來決定哪一隊先發球。
                    </p>
                }
            />

            <TextDrop
                title="2. 請問發球時，是否只能限制發在兩隊發球線之間12米X 24米的矩形範圍內？"
                text={
                    <p>
                        發球沒有固定的方向、路線和遠近，可以把球發到整個球場，發球的範圍不需要局限在介於兩隊發球線之間12米X
                        24米的矩形範圍內。(請參考一般比賽問題2)
                    </p>
                }
            />

            <TextDrop
                title="3. 請問發球時，如果連續擊中對方的球，有沒有任何處罰，比如說:發球連續擊中對方的球三次，必須被判出局嗎？"
                text={
                    <p>
                        根據發球的規則，發球擊中對方的球判為無效，被擊中的球回復原位，然後發球者需將球拿回重新發球。裁判員可提醒發球者重新發球時必須小心避免再擊中任何球！目前發球時連續擊中對方的球並沒有處罰，當然也沒有規定連續擊中對方的球三次必須被判出局。
                    </p>
                }
            />
        </div>
    );

    const gameContent_TW = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 當輪到某隊進攻時，請問1分鐘的討論時間限制是否有包含該隊球員把球打出去的時間"
                text={
                    <p>
                        根據目前的規則，1分鐘的討論時間限制並沒有包含該隊球員把球打出去的時間。。但當1分鐘討論時間快到之前，進攻球隊必需已經決定由哪位球員打球，而且該球員必須將球拿在手中準備擊球或佈陣！如果超過1分鐘，該隊進攻球員還沒把球拿在手上，進攻球隊就被判犯規，犯規的球隊就喪失一次進攻機會
                    </p>
                }
            />

            <TextDrop
                title="2. 請問球員進攻時，是否只要該球員認為旗子阻擋到其進攻球的行進方向，就可任意要求移動或暫時拔起任何旗子？"
                text={
                    <p>
                        根據規則，進攻時如果進攻球員認為球場中任何旗子擋住起進攻球的行進路線，可向裁判提出移動旗子位置的要求！但必須經裁判同意後，插旗員才可以將旗子暫時換個位置或拔起，讓進攻球員進攻，等進攻完後再將這些旗子插回原位。除了以上的規定外，球員是不能用其他的理由來要求移動旗子。
                    </p>
                }
            />

            <TextDrop
                title="3. 球員準備進攻擊或佈球前，當把球拿起後，請問可否將球放下，來重新改變打球的方向或換其他同隊球員進攻？"
                text={
                    <p>
                        根據規則，當輪到某隊進攻時，經過1分鐘討論後決定由某位球員打球，只要該球員把球拿起準備進攻擊或佈球，該球員是不可以將球放下，來重新改變打球的方向或換其他同隊球員進攻。
                    </p>
                }
            />

            <TextDrop
                title="4. 請問如果對方某顆號碼球曾擊先後擊中我方多顆球，之後這一顆號碼球被我方擊中了一次，是否可以同時解救被該號碼球擊中而關住的我方多顆球？"
                text={
                    <p>
                        比如說：紅5之前曾經先後擊中而關住白隊4號和7號球，之後紅5被白3擊中，此時只能解救先被紅5擊中的白4球，而不能一次同時解救白4和白7球。要等下次紅5再被白隊擊中1次，才可以解救白7球。因為擊中對方球一次只能解救一顆被它關的球一次。原則是先被對方球擊中而關住的球先被解救。解救的順序是依被對方球之前擊中的先後順序來判定。
                    </p>
                }
            />

            <TextDrop
                title="5. 如果擊中而關住我方球的對方球被我方球擊中（或因誤擊）而出局了，請問如何解救被出局球關住的我方球？"
                text={
                    <p>
                        比如說：白3之前曾經擊中而關住紅隊6號球，但之後白3被紅隊擊中（或因誤擊隊友）而出局了，此時要解救被出局白3關住的紅6球，紅隊必須擊中在場上的任何白隊球（競技球或被關住的球都可以）來代替出局的白3球。但被擊中的白球必須沒有關住任何紅球，如果有的話，就必須先用來解救被它關住的紅球。
                    </p>
                }
            />

            <TextDrop
                title="6. 請問解救某隊被關住的球是否有不同的優先順序？"
                text={
                    <p>
                        如果甲隊某號碼球被乙隊球擊中，解救因為不同情況被關住的乙隊球是有下面不同的優先順序：
                        <br />
                        （1）被該甲隊某號碼球擊中而關住的乙隊球必須優先被解救；如果有超過一顆乙隊球被該甲隊某號碼球擊中，先被它擊中的球就先被解救。(請詳見問題
                        4)
                        <br />
                        （2）接著如果被擊中的該甲隊某號碼球，並沒有關住乙隊任何球，甲隊號碼球被擊中就可用來解救因被出局球關住的乙隊球(請詳見問題
                        5)；
                        <br />
                        （3）如果(1)和(2)提及被關住的球都被解救了，最後才可用來解救因「誤擊」被關住的乙隊球。
                    </p>
                }
            />
            <hr />
            <h5 style={{ color: "red  " }}>當一次擊球時，連續擊中多顆球:</h5>

            <TextDrop
                title="7. 甲隊某號碼球進攻時，連續擊中對方多顆球，比如說：白1進攻時連續擊中紅3和紅6，請問應如何判定？ "
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ7.png" alt="FAQ 7" />
                        根據規則，白1連續擊中紅3和紅6皆是有效擊球，稱為“雙擊”。在此例子兩顆紅球原來都是競技球，被白1擊中後就都被「初關」插黃旗。
                    </p>
                }
            />

            <TextDrop
                title="8. 甲隊某號碼球進攻時，先擊中對方的球，然後再擊中自己隊友的球，比如說：紅5進攻時先擊中白2，再繼續擊中紅7，請問應如何判定？ "
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ8.png" alt="FAQ 8" />
                        根據規則，紅5擊中白2為有效擊球，白2被初關插黃旗；但紅5之後再擊中紅7是無效擊球。原則規定是:
                        只要先擊中對方的球，如果球再繼續行進擊中同隊友的球是不算誤擊!
                    </p>
                }
            />

            <TextDrop
                title="9. 甲隊某號碼球進攻時，先誤擊中自己隊友的球，然後再擊中對方的球，比如說：紅5進攻時先誤擊紅7，再繼續擊中白2，請問應如何判定？ "
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ9.png" alt="FAQ 9" />
                        根據規則，紅5誤擊中紅7為有效擊球，紅5因誤擊被判「出局」，而紅7在此例子原來是競技球，被紅5
                        誤擊後就被判「初關」插黃旗；已被判「出局」的紅5之後再擊中白2或其他球都是無效。
                    </p>
                }
            />

            <TextDrop
                title="10. 甲隊某號碼球進攻時，先擊中對方某顆球，這顆被擊中的球，再擊中其他球，比如說：白1進攻時先擊中紅3，紅3被擊中後再擊中紅6，請問應如何判定？"
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ10.png" alt="FAQ 10" />
                        根據規則，白1先擊中紅3為有效擊球，而紅3在此例子原來是競技球，被白1擊中後就被判「初關」插黃旗。已被判「初關」的紅3之後再擊中紅6或其它球是無效的!
                    </p>
                }
            />
        </div>
    );

    const captureZoneContent_TW = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 請問圍捕線設定後，是否就不會被取消，直到比賽結束？"
                text={
                    <p>
                        設定圍捕線的條件是當其中一隊只剩下一顆競技球時，就必需要設定「圍捕線」。因此，如果這個條件不存在，圍捕線就被取消！比如在圍捕線內競技，剩下一顆競技球的球隊，如果擊中對方的球，解救了自己的隊友，則該隊就有兩顆競技球，此時圍捕線就取消了！
                    </p>
                }
            />
        </div>
    );

    const mishitContent_TW = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 請問對方某顆球因誤擊而被關住，可否用來解救之前被這顆球擊中而關住的我方球，比如說：紅5誤擊紅3，紅5出局而紅3被初關，請問紅3被誤擊，可否用來解救之前被紅3擊中而關住的白6球？ "
                text={
                    <p>
                        根據規則，要解救之前被紅3擊中而關住的白6球，必須白隊的球擊中紅3球才可以。因此，紅5誤擊紅3球是不可以用來解救白6的。
                    </p>
                }
            />
        </div>
    );

    const interceptionContent_TW = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 請問是否只有隊長可以下達「攔擊」的指令？"
                text={<p>根據目前規則，爲了避免混亂，只有隊長可以下達「攔擊」的指令。</p>}
            />

            <TextDrop
                title="2. 當對方進攻時，我方採取「攔擊」後，請問接下來由哪一隊繼續進攻？"
                text={
                    <p>
                        比如說：紅球要進攻白球的時候，白球可採取緊急「攔擊」，但不管攔擊是否成功，只要攔擊球員將球擊出，則白隊視為進攻一次，接下來就由紅隊繼續進攻。
                    </p>
                }
            />

            <TextDrop
                title="3. 當攔擊時，沒有擊中要攔擊的對方球，而意外擊中其他球，請問是否仍為有效擊球？"
                text={
                    <p>
                        比如說：紅球要進攻白球的時候，白球可採取攔擊。白隊攔擊的球員，若沒有擊中原來要攔擊的那顆紅球,
                        但意外擊中紅隊的其它球，同樣屬有效。如果白隊的攔擊球擊中白隊的其它球，則屬「誤擊」。
                    </p>
                }
            />

            <TextDrop
                title="4. 對於要攔擊的球員，是否有時間的限制或規定什麽時候必須把球打出去才是最適當的時機能成功地完成攔擊？"
                text={
                    <p>
                        對於要攔擊的球員，規則上並沒有時間的限制或規定什麽時候必須把球打出去才是成功攔擊的適當時機。但是攔擊的時機是有區分為有效和無效的。
                        <br />
                        • 有效攔擊的時機:
                        是介於對方攻擊球員把球打出去的時間開始到快接近但尚未擊中要攻擊的我方球之前都可進行攔擊。
                        <br />
                        • 無效攔擊的時機:
                        <br />
                        (1) 攔擊的球員比對方攻擊球員提前把球打出去；
                        <br />
                        (2) 或等對方進攻的球停止後或已經超越過對方想要攻擊的我方球才把球打出去。
                        <br />
                        這些不但是無效攔擊，而且是犯規的！
                    </p>
                }
            />
        </div>
    );

    const content_TW = [
        { title: "一般比賽問題", content: generalContent_TW },
        { title: "發球", content: serveContent_TW },
        { title: "比賽競技對抗", content: gameContent_TW },
        { title: "圍捕線", content: captureZoneContent_TW },
        { title: "誤擊", content: mishitContent_TW },
        { title: "攔擊", content: interceptionContent_TW },
    ];

    // ======简体中文=====
    const generalContent_CN = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 请问正式Wiser比赛，有没有时间上的限制？"
                text={
                    <p>
                        除了第一阶段发球外，每队轮到进攻时有1分钟战术讨论的时间限制。除此之外，正式Wiser比赛基本上并没有时间上的限制!
                    </p>
                }
            />

            <TextDrop
                title="2. 请问正式Wiser比赛，有没有场地範围上的限制？"
                text={
                    <p>
                        除了在「围捕线」内竞技，比赛场地会有12米x
                        24米的矩形範围限制外，正式Wiser比赛并没有场地和範围上的限制!
                        一般来说，Wiser比赛场地是不限大小，可因地制宜。
                    </p>
                }
            />
        </div>
    );

    const serveContent_CN = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 请问正式Wiser比赛“发球”前，是否一定要用抽籤的方式来决定那一队先发球吗？"
                text={
                    <p>
                        为了公平起见，正式Wiser比赛是由两队队长抽籤决定哪一队先发球。但如果是一般比赛或练习时，只要主办单位以及比赛队伍同意，爲了方便也可采取其他方法:
                        例如猜掷铜板或猜拳来决定哪一队先发球。
                    </p>
                }
            />

            <TextDrop
                title="2. 请问发球时，是否只能限制发在两队发球线之间12米X 24米的矩形範围内？"
                text={
                    <p>
                        发球没有固定的方向、路线和远近，可以把球发到整个球场，发球的範围不需要局限在介於两队发球线之间12米X
                        24米的矩形範围内。(请参考一般比赛问题2)
                    </p>
                }
            />

            <TextDrop
                title="3. 请问发球时，如果连续击中对方的球，有没有任何处罚，比如说:发球连续击中对方的球叁次，必须被判出局吗？"
                text={
                    <p>
                        根据发球的规则，发球击中对方的球判为无效，被击中的球回复原位，然後发球者需将球拿回重新发球。裁判员可提醒发球者重新发球时必须小心避免再击中任何球！目前发球时连续击中对方的球并没有处罚，当然也没有规定连续击中对方的球叁次必须被判出局。
                    </p>
                }
            />
        </div>
    );

    const gameContent_CN = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 当轮到某队进攻时，请问1分钟的讨论时间限制是否有包含该队球员把球打出去的时间"
                text={
                    <p>
                        根据目前的规则，1分钟的讨论时间限制并没有包含该队球员把球打出去的时间。。但当1分钟讨论时间快到之前，进攻球队必需已经决定由哪位球员打球，而且该球员必须将球拿在手中準备击球或佈阵！如果超过1分钟，该队进攻球员还没把球拿在手上，进攻球队就被判犯规，犯规的球队就丧失一次进攻机会
                    </p>
                }
            />

            <TextDrop
                title="2. 请问球员进攻时，是否只要该球员认为旗子阻挡到其进攻球的行进方向，就可任意要求移动或暂时拔起任何旗子？"
                text={
                    <p>
                        根据规则，进攻时如果进攻球员认为球场中任何旗子挡住起进攻球的行进路线，可向裁判提出移动旗子位置的要求！但必须经裁判同意後，插旗员才可以将旗子暂时换个位置或拔起，让进攻球员进攻，等进攻完後再将这些旗子插回原位。除了以上的规定外，球员是不能用其他的理由来要求移动旗子。
                    </p>
                }
            />

            <TextDrop
                title="3. 球员準备进攻击或佈球前，当把球拿起後，请问可否将球放下，来重新改变打球的方向或换其他同队球员进攻？"
                text={
                    <p>
                        根据规则，当轮到某队进攻时，经过1分钟讨论後决定由某位球员打球，只要该球员把球拿起準备进攻击或佈球，该球员是不可以将球放下，来重新改变打球的方向或换其他同队球员进攻。
                    </p>
                }
            />

            <TextDrop
                title="4. 请问如果对方某颗号码球曾击先後击中我方多颗球，之後这一颗号码球被我方击中了一次，是否可以同时解救被该号码球击中而关住的我方多颗球？"
                text={
                    <p>
                        比如说：红5之前曾经先後击中而关住白队4号和7号球，之後红5被白3击中，此时只能解救先被红5击中的白4球，而不能一次同时解救白4和白7球。要等下次红5再被白队击中1次，才可以解救白7球。因为击中对方球一次只能解救一颗被它关的球一次。原则是先被对方球击中而关住的球先被解救。解救的顺序是依被对方球之前击中的先後顺序来判定。
                    </p>
                }
            />

            <TextDrop
                title="5. 如果击中而关住我方球的对方球被我方球击中（或因误击）而出局了，请问如何解救被出局球关住的我方球？"
                text={
                    <p>
                        比如说：白3之前曾经击中而关住红队6号球，但之後白3被红队击中（或因误击队友）而出局了，此时要解救被出局白3关住的红6球，红队必须击中在场上的任何白队球（竞技球或被关住的球都可以）来代替出局的白3球。但被击中的白球必须没有关住任何红球，如果有的话，就必须先用来解救被它关住的红球。
                    </p>
                }
            />

            <TextDrop
                title="6. 请问解救某队被关住的球是否有不同的优先顺序？"
                text={
                    <p>
                        如果甲队某号码球被乙队球击中，解救因为不同情况被关住的乙队球是有下面不同的优先顺序：
                        <br />
                        （1）被该甲队某号码球击中而关住的乙队球必须优先被解救；如果有超过一颗乙队球被该甲队某号码球击中，先被它击中的球就先被解救。(请详见问题
                        4)
                        <br />
                        （2）接著如果被击中的该甲队某号码球，并没有关住乙队任何球，甲队号码球被击中就可用来解救因被出局球关住的乙队球(请详见问题
                        5)；
                        <br />
                        （3）如果(1)和(2)提及被关住的球都被解救了，最後才可用来解救因「误击」被关住的乙队球。
                    </p>
                }
            />
            <hr />
            <h5 style={{ color: "red  " }}>当一次击球时，连续击中多颗球:</h5>

            <TextDrop
                title="7. 甲队某号码球进攻时，连续击中对方多颗球，比如说：白1进攻时连续击中红3和红6，请问应如何判定？ "
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ7.png" alt="FAQ 7" />
                        根据规则，白1连续击中红3和红6皆是有效击球，称为“双击”。在此例子两颗红球原来都是竞技球，被白1击中後就都被「初关」插黄旗。
                    </p>
                }
            />

            <TextDrop
                title="8. 甲队某号码球进攻时，先击中对方的球，然後再击中自己队友的球，比如说：红5进攻时先击中白2，再继续击中红7，请问应如何判定？ "
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ8.png" alt="FAQ 8" />
                        根据规则，红5击中白2为有效击球，白2被初关插黄旗；但红5之後再击中红7是无效击球。原则规定是:
                        只要先击中对方的球，如果球再继续行进击中同队友的球是不算误击!
                    </p>
                }
            />

            <TextDrop
                title="9. 甲队某号码球进攻时，先误击中自己队友的球，然後再击中对方的球，比如说：红5进攻时先误击红7，再继续击中白2，请问应如何判定？ "
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ9.png" alt="FAQ 9" />
                        根据规则，红5误击中红7为有效击球，红5因误击被判「出局」，而红7在此例子原来是竞技球，被红5
                        误击後就被判「初关」插黄旗；已被判「出局」的红5之後再击中白2或其他球都是无效。
                    </p>
                }
            />

            <TextDrop
                title="10. 甲队某号码球进攻时，先击中对方某颗球，这颗被击中的球，再击中其他球，比如说：白1进攻时先击中红3，红3被击中後再击中红6，请问应如何判定？"
                text={
                    <p>
                        <img src="\assets\FAQ\FAQ10.png" alt="FAQ 10" />
                        根据规则，白1先击中红3为有效击球，而红3在此例子原来是竞技球，被白1击中後就被判「初关」插黄旗。已被判「初关」的红3之後再击中红6或其它球是无效的!
                    </p>
                }
            />
        </div>
    );

    const captureZoneContent_CN = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 请问围捕线设定後，是否就不会被取消，直到比赛结束？"
                text={
                    <p>
                        设定围捕线的条件是当其中一队只剩下一颗竞技球时，就必需要设定「围捕线」。因此，如果这个条件不存在，围捕线就被取消！比如在围捕线内竞技，剩下一颗竞技球的球队，如果击中对方的球，解救了自己的队友，则该队就有两颗竞技球，此时围捕线就取消了！
                    </p>
                }
            />
        </div>
    );

    const mishitContent_CN = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 请问对方某颗球因误击而被关住，可否用来解救之前被这颗球击中而关住的我方球，比如说：红5误击红3，红5出局而红3被初关，请问红3被误击，可否用来解救之前被红3击中而关住的白6球？ "
                text={
                    <p>
                        根据规则，要解救之前被红3击中而关住的白6球，必须白队的球击中红3球才可以。因此，红5误击红3球是不可以用来解救白6的。
                    </p>
                }
            />
        </div>
    );

    const interceptionContent_CN = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop
                title="1. 请问是否只有队长可以下达「拦击」的指令？"
                text={<p>根据目前规则，爲了避免混乱，只有队长可以下达「拦击」的指令。</p>}
            />

            <TextDrop
                title="2. 当对方进攻时，我方采取「拦击」後，请问接下来由哪一队继续进攻？"
                text={
                    <p>
                        比如说：红球要进攻白球的时候，白球可采取紧急「拦击」，但不管拦击是否成功，只要拦击球员将球击出，则白队视为进攻一次，接下来就由红队继续进攻。
                    </p>
                }
            />

            <TextDrop
                title="3. 当拦击时，没有击中要拦击的对方球，而意外击中其他球，请问是否仍为有效击球？"
                text={
                    <p>
                        比如说：红球要进攻白球的时候，白球可采取拦击。白队拦击的球员，若没有击中原来要拦击的那颗红球,
                        但意外击中红队的其它球，同样属有效。如果白队的拦击球击中白队的其它球，则属「误击」。
                    </p>
                }
            />

            <TextDrop
                title="4. 对於要拦击的球员，是否有时间的限制或规定什麽时候必须把球打出去才是最适当的时机能成功地完成拦击？"
                text={
                    <p>
                        对於要拦击的球员，规则上并没有时间的限制或规定什麽时候必须把球打出去才是成功拦击的适当时机。但是拦击的时机是有区分为有效和无效的。
                        <br />
                        <br />
                        • 有效拦击的时机:
                        是介於对方攻击球员把球打出去的时间开始到快接近但尚未击中要攻击的我方球之前都可进行拦击。
                        <br />
                        <br />
                        • 无效拦击的时机:
                        <br />
                        <br />
                        (1) 拦击的球员比对方攻击球员提前把球打出去；
                        <br />
                        <br />
                        (2) 或等对方进攻的球停止後或已经超越过对方想要攻击的我方球才把球打出去。
                        <br />
                        <br />
                        这些不但是无效拦击，而且是犯规的！
                    </p>
                }
            />
        </div>
    );

    const content_CN = [
        { title: "一般比赛问题", content: generalContent_CN },
        { title: "发球", content: serveContent_CN },
        { title: "比赛竞技对抗", content: gameContent_CN },
        { title: "围捕线", content: captureZoneContent_CN },
        { title: "误击", content: mishitContent_CN },
        { title: "拦击", content: interceptionContent_CN },
    ];

    return (
        <div>
            <div className="wwsc-container">
                {lang === "en" && (
                    <div className="text-container">
                        <h1>Frequently Asked Questions (FAQs)</h1>
                        <p>
                            The following are frequently asked questions of Wiser Sport. Please click the topic of any
                            question to see our replies.
                        </p>

                        <CustomTab content={content} />
                    </div>
                )}
                {lang === "zh-TW" && (
                    <div className="text-container">
                        <h1>常見問題解答 (FAQs)</h1>
                        <p>下列為有關Wiser運動比賽時常見的問題，請點擊問題標題以看到我們的答覆。</p>

                        <CustomTab content={content_TW} />
                    </div>
                )}

                {lang === "zh-CN" && (
                    <div className="text-container">
                        <h1>常见问题解答 (FAQs)</h1>
                        <p style={{textIndent:"0"}}>下列为有关Wiser运动比赛时常见的问题，请点击问题标题以看到我们的答覆。</p>

                        <CustomTab content={content_CN} />
                    </div>
                )}
            </div>
        </div>
    );
}
