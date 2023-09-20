import './Glossary.css';

import CustomTab from '../../../components/CustomTab/CustomTab'
import { NavLink } from 'react-router-dom';

export default function Glossary() {
    
    const orderContent = (
        <div className="content">
            <p className='glossary-text'>The following common terminologies of the Wiser sport are listed based on the order in which they appear in the <NavLink to="/wiser-sport/the-rules-of-wiser-sport/">rules handbook:</NavLink></p>

            <div className="grid-format">
                <h1>Centerline</h1>
                <p>The “Centerline” is a 12-meter line in the middle between the two teams’ serving lines. The distance between the centerline and each team’s serving line is 12 meters.</p>

                <h1>Referee</h1>
                <p>An official who has the responsibility to enforce the rules of the Wiser sport set by the World Wiser Sport Committee and maintain the order of the game.</p>

                <h1>Record Keeper</h1>
                <p>A person who has the responsibility to record the game’s progress and final outcome on a “Wiser Game Recording Sheet” as well as providing information in response to inquiries from the referee regarding ball statuses, records of fouls committed by the players, and the number of ball settings made by a team.</p>


                <h1>Flag Person</h1>
                <p>A person who has the responsibility to insert or pull out flags according to the ruling of the referee.</p>

                <h1>Ball Serving</h1>
                <p>At the start of a Wiser game, players are launching out their balls to their intended positions for the first time. This is called “Ball Serving.”</p>

                <h1>Serving Lines</h1>
                <p>The standing positions for serving the balls by both teams are called “Serving Lines.” The distance between each team’s serving line and the centerline is 12 meters.</p>

                <h1>Contesting Ball</h1>
                <p>At the start of a Wiser game, all balls are “contesting” balls. Players have the right to use these balls to launch attacks or set the ball.</p>

                <h1>First-Lock</h1>
                <p>When a “contesting” ball is hit for the first time by the opponent’s “contesting” ball, the ball being hit is ruled as “first-locked.” This ball is not allowed to be moved. The flag person will insert a yellow flag next to the “first-locked” ball.</p>

                <h1>Second-Lock</h1>
                <p>If a “first-locked” ball is hit for the 2nd time, its status is changed to “second-locked.” The flag person will replace the yellow flag with the red flag next to the “second-locked” ball.</p>

                <h1>Strike-Out</h1>
                <p>(1) If a “second-locked” ball is hit for the 3rd time, the ball will be “struck-out.” (See “Strike-out”) (2) When a ball hits a ball of its own team, this is called a “Mishit.” The ball that caused the “Mishit” will be “struck out” and will be eliminated from the game. (See “Mishit”)</p>

                <h1>Yellow Flag</h1>
                <p>In the Wiser game, a yellow flag is inserted next to a ball to identify that the ball’s status is “first-locked.” (See “First-Lock”)</p>

                <h1>Red Flag</h1>
                <p>	In the Wiser game, a red flag is inserted next to a ball to identify that the ball’s status is “second-locked.”</p>

                <h1>Rescue</h1>
                <p>To rescue any “locked” balls (either “first-locked” or “second-locked” balls), the teammate of the “locked” balls must hit the opponent’s ball(s) that have hit the “locked” balls.</p>

                <h1>Ball Hitting</h1>
                <p>	“Ball Hitting” means aiming at and hitting a target ball of the opposing team. The player can roll, toss, or shoot his/her ball to hit the opponent’s ball.</p>

                <h1>Ball Setting</h1>
                <p>When playing the Wiser game, a player can also choose to “set” (or “position”) his/her ball to a special position instead of aiming to hit a ball of the opponent.</p>

                <h1>Capture Zone</h1>
                <p>If one of the two teams has only one contesting ball left, the “Capture Zone” must be set up. The “Capture Zone” is the rectangular area between two teams’ serving lines. Its range is 12 meters by 24 meters.</p>

                <h1>Reposition</h1>
                <p>After setting up the Capture Zone, the two teams must “reposition” their remaining contesting balls and locked balls within the Capture Zone respectively. The way to reposition is to pick up the balls from their original positions in the playing field and then arrange them at any locations on a “repositioning line,” which is the line located one meter inside from each team’s serving line.</p>

                <h1>Mishit</h1>
                <p>A ball that hits a ball of its own team is called a “Mishit.”</p>

                <h1>Interception</h1>
                <p>Interception refers to a quick action of blocking when the opposing team is launching an attack. Interception can be used at any time during the game.</p>
            </div>
        </div>
    )

    const alphabetContent = (
        <div className="content">
            <p className='glossary-text'>The following common terminologies of the Wiser sport are listed in alphabetical order:</p>

            <div className="grid-format">
                <h1>Ball Hitting</h1>
                <p>“Ball Hitting” means aiming at and hitting a target ball of the opposing team. The player can roll, toss, or shoot his/her ball to hit the opponent’s ball.</p>

                <h1>Ball Setting</h1>
                <p>When playing the Wiser game, a player can also choose to “set” (or “position”) his/her ball to a special position instead of aiming to hit a ball of the opponent.</p>

                <h1>Ball Serving</h1>
                <p>At the start of a Wiser game, players are launching out their balls to their intended positions for the first time. This is called “Ball Serving.”</p>

                <h1>Capture Zone</h1>
                <p>If one of the two teams has only one contesting ball left, the “Capture Zone” must be set up. The “Capture Zone” is the rectangular area between two teams’ serving lines. Its range is 12 meters by 24 meters.</p>

                <h1>Centerline</h1>
                <p>The “Centerline” is a 12-meter line in the middle between the two teams’ serving lines. The distance between the centerline and each team’s serving line is 12 meters.</p>

                <h1>Contesting Ball</h1>
                <p>At the start of a Wiser game, all balls are “contesting” balls. Players have the right to use these balls to launch attacks or set the ball.</p>

                <h1>First-Lock</h1>
                <p>When a “contesting” ball is hit for the first time by the opponent’s “contesting” ball, the ball being hit is ruled as “first-locked.” This ball is not allowed to be moved. The flag person will insert a yellow flag next to the “first-locked” ball.</p>

                <h1>Flag Person</h1>
                <p>A person who has the responsibility to insert or pull out flags according to the ruling of the referee.</p>

                <h1>Interception</h1>
                <p>	Interception refers to a quick action of blocking when the opposing team is launching an attack. Interception can be used at any time during the game.</p>

                <h1>Mishit</h1>
                <p>A ball that hits a ball of its own team is called a “Mishit.”</p>

                <h1>Record Keeper</h1>
                <p>A person who has the responsibility to record the game’s progress and final outcome on a “Wiser Game Recording Sheet” as well as providing information in response to inquiries from the referee regarding ball statuses, records of fouls committed by the players, and the number of ball settings made by a team.</p>

                <h1>Red Flag</h1>
                <p>In the Wiser game, a red flag is inserted next to a ball to identify that the ball’s status is “second-locked.”</p>

                <h1>Referee</h1>
                <p>An official who has the responsibility to enforce the rules of the Wiser sport set by the World Wiser Sport Committee and maintain the order of the game.</p>

                <h1>Reposition</h1>
                <p>	After setting up the Capture Zone, the two teams must “reposition” their remaining contesting balls and locked balls within the Capture Zone respectively. The way to reposition is to pick up the balls from their original positions in the playing field and then arrange them at any locations on a “repositioning line,” which is the line located one meter inside from each team’s serving line.</p>

                <h1>Rescue</h1>
                <p>To rescue any “locked” balls (either “first-locked” or “second-locked” balls), the teammate of the “locked” balls must hit the opponent’s ball(s) that have hit the “locked” balls.</p>

                <h1>Second-Lock</h1>
                <p>If a “first-locked” ball is hit for the 2nd time, its status is changed to “second-locked.” The flag person will replace the yellow flag with the red flag next to the “second-locked” ball.</p>

                <h1>Serving Lines</h1>
                <p>The standing positions for serving the balls by both teams are called “Serving Lines.” The distance between each team’s serving line and the centerline is 12 meters.</p>

                <h1>Strike-Out</h1>
                <p>(1) If a “second-locked” ball is hit for the 3rd time, the ball will be “struck-out.” (See “Strike-out”) (2) When a ball hits a ball of its own team, this is called a “Mishit.” The ball that caused the “Mishit” will be “struck out” and will be eliminated from the game. (See “Mishit”)</p>

                <h1>Yellow Flag</h1>
                <p>In the Wiser game, a yellow flag is inserted next to a ball to identify that the ball’s status is “first-locked.” (See “First-Lock”)</p>
            </div>
        </div>
    )

    const content = [{ title: "Orders in Rules Handbook", content: orderContent }, { title: "Alphabetical Order", content: alphabetContent }]

    return (
        <div>
            <div className="custom-container">
                <div className="text">
                    <h1>Common Terminologies of Wiser Sport</h1>
                    <CustomTab content={content} />
                </div>
            </div>
        </div>
    )
}
