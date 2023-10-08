import CustomTab from '../../../components/CustomTab/CustomTab';
import TextDrop from './TextDrop';

import './FAQ.css'

export default function FAQ() {

    const generalContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop 
                title="1. Is there any time limit for an official Wiser game?"
                text={<p>Except for Phase I of Ball Serving, there is a one-minute time limit for tactical discussion for each team’s turn to attack. Otherwise, there is no time limit for an official Wiser ball game!</p>} 
            />

            <TextDrop 
                title="2. Is there any range/area limit for the playing field in an official Wiser game?" 
                text={<p>Except when two teams are contesting within the Capture Zone, the game area will be limited within the rectangular area of 12 m x 24 m. Otherwise, the playing field of an official Wiser game has no range/area limit and can be played based on whatever landscape is available.
                </p> }
            />
        </div>
    )

    const serveContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop 
                title="1. Before ball serving, is it required in an official Wiser game to use the drawing of lots to determine which team will serve first?" 
                text={<p>For fair competition in an official Wiser game, the captains from both teams may draw lots to determine which team will serve first. However, for convenience, other methods like coin tossing or “rock, paper, scissors” can also be used during the regular games or practices to determine which team will serve first as long as the hosting organization and both teams agree these methods.</p> }
            />

            <TextDrop 
                title="2. During ball serving, is it required to serve the balls to be positioned inside the 12 m x 24 m rectangular area enclosed by two teams’ serving lines?" 
                text={<p>There is no fixed direction, path, or distance for serving the ball. A ball can be served anywhere within the entire playing field. Balls do not have to be served and rest inside the rectangular area enclosed by two teams’ serving lines. (Please refer to General, Question 2)</p> }
            />

            <TextDrop 
                title="3. During ball serving, is there any penalty for a player who serves and continuously hits the opponent’s balls—for example, should the player be eliminated if he/she served the ball and hit the opponent’s ball(s) three consecutive times?" 
                text={<p>According to the rules of ball serving, if the ball being served hits any ball of the opposing team or the player’s own team, the serving will be considered as “invalid”. The ball that got hit will be placed back to its original position. Then the player serving the ball will take back his or her ball and re-serve again. The referee may remind the player to be careful and not to hit any balls again when re-serving. However, so far there is no penalty for the player who serves and continuously hits the opponent’s balls. Therefore, the player won’t be eliminated if he/she serves the ball and hit the opponent’s ball(s) three consecutive times.</p> } 
            />
        </div>
    )

    const gameContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop 
                title="1. Does the one-minute time limit for tactical discussion by the attacking team include the time of launching the ball out by the team’s player?" 
                text={<p>According to the current rules, the one-minute time limit for tactical discussion does not include the time of launching the ball out by the player of the attacking team. However, when the one-minute time almost expires, the attacking team must have decided which player will attack and that designated player must pick up the ball and hold it in his/her hand, ready to attack or set the ball. Otherwise, if the attacking player has not picked up the ball after exceeding the one-minute time limit, the attacking team will be cited as committing a foul. The team that committed the foul will lose its turn to attack.</p> }
            />

            <TextDrop 
                title="2. When attacking, can the player arbitrarily request to move or temporarily pull up any flag(s) as long as the player considers that the flag(s) is/are blocking the intended traveling route of his/her attacking ball?" 
                text={<p>According to the rules, if the attacking player considers that any flag(s) in the playing field is/are blocking the intended traveling route of his/her attacking ball, the attacking player may request to temporarily relocate those flag(s). Only after the request has been approved by the referee can the flag person can move the flag(s) to another spot or temporarily pull up the flag(s) to clear the way for the attacking ball. Any flag(s) that was/were pulled up must be reinserted into its/their original position(s) after the attack is completed. Other than this rule, the player cannot use other reason(s) to request to move flag(s).</p> }
            />

            <TextDrop 
                title="3. After a player has picked up the ball but has not launched the ball out for attacking or setting the ball, can this player put his/her ball back down to change the direction of attack or allow another player of his/her team to attack instead?" 
                text={<p>According to the rules, when a team has its turn to attack, the team has a tactical discussion of up to one minute to decide which player should attack. Once this designated player has picked up the ball and is ready to attack or set the ball, he or she is not allowed to put the ball down to change the direction of attack or to allow another player of his/her team to attack instead.</p> }
            />

            <TextDrop 
                title="4. Let’s say a certain number ball of the opposing team hit multiple balls of our team at different times. Later, this opponent’s ball was hit by our team once. Can the multiple balls of our team being hit and locked by that opponent’s ball all be rescued?" 
                text={<p>Let’s say, for example, that the Red 5 has hit and locked the White 4 first and then subsequently hit the White 7. Later in the game, if the Red 5 was hit by the White 3, the hit on the Red 5 could only be used to rescue the White 4 first and could not rescue both the White 4 and the White 7 all at once. Only until the Red 5 was hit again by any White ball could the White 7 can then be rescued. This is because hitting the opponent’s ball once can only be used to rescue one ball at a time. The principle is: Whichever ball got hit and locked by the opponent’s ball first will be rescued first. To rescue the balls of our team that were locked by an opponent’s ball, the order of rescuing is determined by the chronological order of the balls being hit. </p> }
            />

            <TextDrop 
                title="5. How can a locked ball of our team be rescued after the opponent’s ball that previously hit and locked it has been struck out by the ball(s) of our team (or due to a “Mishit”)?" 
                text={<p>For example, let’s say the Red 6 was hit and locked by the White 3. Later in the game, the White 3 was struck out from the game. To rescue the Red 6, the Red team has to hit any White ball (can be a contesting ball or a locked ball) to replace the struck-out White 3. However, the White ball(s) being hit cannot lock any Red ball(s) at that time. Otherwise, any Red ball locked by that White ball being hit must be rescued first.</p> }
            />

            <TextDrop 
                title="6. Are there any priorities for rescuing locked balls?" 
                text={<p>If a certain number ball of Team A was hit by a ball of Team B, the priorities to rescue the “locked” balls of Team B are as follows：
                <br /> <br />
                (1) The ball(s) of Team B that were hit and locked by this ball of Team A will be rescued first. If more than one ball of Team B have been hit by this ball of Team A, the one that was hit first will be rescued first. (Please see Question 4)
                <br /> <br />
                (2) If this ball of Team A that got hit did not lock any ball of Team B, the hit it got can then be used to rescue the ball of team B that was locked by another ball of team A which has been struck out from the game. (Please see Question 5)
                <br /> <br />
                (3) If all locked balls mentioned in (1) and (2) above have been rescued, the hit on that ball of Team A can then be used to rescue the ball of Team B that was locked due to a “Mishit.” (Please see “How to Rescue a Ball Locked Due to a Mishit”)</p> }
            />
            <hr/>
            <h5 style={{color: "red  "}}>The attacking ball hits more than one ball in one attack:</h5>

            <TextDrop 
                title="7. When a certain number ball of Team A attacked, it continuously hit more than one ball of the opposing team. Let’s say, for example, that in its attack, the White 1 first hit the Red 3 and then successively hit the Red 6. How should this situation be ruled?" 
                text={<p><img src="\assets\FAQ\FAQ7.png"/> According to the rules, the successive hits on the Red 3 and the Red 6 by the White 1 are both valid. This is called a “double-hit.” In this example, both the Red 3 and the Red 6 will be “first-locked” with yellow flags inserted next to them.</p> }
            />

            <TextDrop 
                title="8. When a certain number ball of Team A attacked, it first hit a ball of the opposing team and then successively hit a ball of its own team. Let’s say, for example, that the Red 5 first hit the White 2 and then successively hit its teammate’s the Red 7. How should this situation be ruled?" 
                text={<p><img src="\assets\FAQ\FAQ8.png"/> According to the rules, the hit on the White 2 by the Red 5 is a valid hit, causing the White 2 to be “first-locked” with a yellow flag. However, its successive hit on the Red 7 is an “invalid” hit. The principle is: As long as the attacking ball first hits an opponent’s ball, the successive hit on the ball of its own team will not be considered as a “Mishit.”</p> }
            />

            <TextDrop 
                title="9. When a certain number ball of Team A attacked, it first mishit a ball of its own team and then successively hit a ball of the opposing team. For example, the Red 5 in its attack first mishit the Red 7 and then hit the White 2. How should this situation be ruled?" 
                text={<p><img src="\assets\FAQ\FAQ9.png"/> According to the rules, the Mishit on the White 2 by the Red 5 is a valid hit, causing the Red 5 to be ruled “struck out” and eliminated from the game. Also, the Red 7 will be ruled as “first-locked” with a yellow flag. Because the Red 5 has already been eliminated from the game right after committing a Mishit, its successive hit on the White 2 is an “invalid” hit.</p> }
            />

            <TextDrop 
                title="10. When a certain number ball of Team A attacked, it first hit a ball of the opposing team and caused the ball being hit to move and hit another ball. For example, let’s say the White 1 attacked and hit the Red 3. Then the Red 3 being hit has moved and hit the Red 6. How should the following situation be ruled?" 
                text={<p><img src="\assets\FAQ\FAQ10.png"/> According to the rules, the first hit on the Red 3 by the White 1 is a valid hit, causing the Red 3 to be “first-locked” with a yellow flag. Subsequently, the “first-locked” Red 3’s hit on other ball(s) (the Red 6, in this example) is invalid.</p> }
            />
        </div>
    )

    const captureZoneContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop 
                title="1. Is it true that once the “Capture Zone” is set up, it will last until the end of the game and never be removed?" 
                text={<p>The “Capture Zone” is required to be set up when one of the two teams has only one contesting ball left. Therefore, if this condition is no longer valid, the “Capture Zone” will be removed! For example, let’s say that when playing within the “Capture Zone,” the team that has only one contesting ball left made a successful hit on a ball of the opposing team to cause a teammate to be rescued. This team now has two contesting balls. At this time, the “Capture Zone” will be removed!.</p> }
            />
        </div>
    )

    const mishitContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop 
                title="1. When a ball of the opposing team gets locked due to a Mishit, can this hit be used to rescue a ball of our team that was hit and locked by this opponent’s ball? For example, let’s say the Red 5 mishit the Red 3, causing the Red 5 to be eliminated from the game and the Red 3 to be “first-locked.” Can this mishit on the Red 3 be used to rescue the White 6, which was hit and locked by the Red 3 earlier? " 
                text={<p>According to the rules, to rescue the White 6 which was hit and locked by the Red 3, the White team must hit the Red 3. Therefore, the Mishit on the Red 3 by the Red 5 cannot be used to rescue the White 6.</p> }
            />
        </div>
    )

    const interceptionContent = (
        <div style={{ marginTop: "1vw" }}>
            <TextDrop 
                title="1. Is it true that only the captain of each team can issue the instruction for an “interception”?" 
                text={<p>According to the current rules, to prevent any confusion, only the captain of each team can issue the instruction for an “interception.”</p> }
            />

            <TextDrop 
                title="2. When the opponent’s ball is attacking, our team can make an “interception.” Which team will attack next after the interception has been made?" 
                text={<p>Let’s say, for example, when the Red team is attacking, the White team can make an “interception.” Regardless of whether or not the interception is successful, as long as the player for interception launched the ball out, it is counted as an attack by the White team. So, after interception, it will be the turn of the Red team to attack next.</p> }
            />

            <TextDrop 
                title="3. If, when making an interception, the ball does not hit the opponent’s ball to be intercepted but accidentally hit another ball(s), is this still a valid hit?" 
                text={<p>Let’s say, for example, that when a Red ball is attacking, a White ball can make an interception. If the ball of the White team for interception does not hit the Red ball to be intercepted but unexpectedly hits another Red ball, this hit is still valid. However, if this White ball hit another White ball, it will be ruled as a “Mishit.”</p> }
            />

            <TextDrop 
                title="4. Is there a time limit for a player to make an interception or any proper timing to launch the ball out for a successful interception?" 
                text={<p>According to the rules, there is neither a time limit for a player to make an interception nor any proper timing when a ball should be launched out for a successful interception.However, there are “valid” and “invalid” timings for an interception to be made, and these are described as follows: 
                    <br/><br/>
                    • “Valid” Timing for Interception: The valid timing for interception is the time interval beginning from the time when the attacking ball was launched out to the time when that attacking ball is approaching but has not yet hit the ball being attacked.
                    <br/><br/>
                    • “Invalid” Timing for Interception:
                    <br/><br/>
                    (1) The player, in an attempt to make an interception, launched the ball out before the opposing team’s attacking player does
                    <br/><br/>
                    (2) The player, in an attempt to make an interception, launched the ball out after the opposing team’s attacking ball has already stopped or gone past the ball of our team being attacked
                    <br/><br/>
                    These are not only invalid interceptions, but are also commissions of fouls！</p> }
            />
        </div>
    )

    const content = [{ title: "General", content: generalContent }, { title: "Ball Serving", content: serveContent }, { title: "Game Contesting", content: gameContent }, { title: "Capture Zone", content: captureZoneContent }, { title: "Mishit", content: mishitContent}, { title: "Interception", content: interceptionContent}]

    return (
        <div>
            <div className="wwsc-container">
                <div className="img-text-container">
                    <h1>Frequently Asked Questions (FAQs)</h1>
                    <p>The following are frequently asked questions of Wiser Sport. Please click the topic of any question to see our replies.</p>

                    < CustomTab content={content}/>
                </div>

            </div>


        </div>
    )
}
