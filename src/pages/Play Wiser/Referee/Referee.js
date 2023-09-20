import './Referee.css'

import CustomTab from '../../../components/CustomTab/CustomTab'

export default function Referee({ history }) {

    const certContent = (
        <div className="content">
            <h1 className='referee-header'>I.  Certification System for Wiser Referees</h1>
            <p>1.  All grades of official Wiser referees must complete the World Wiser Sport Committee’s (WWSC) required training courses and assessments. After being qualified, a referee certificate corresponding to its grade will then be issued by the WWSC.</p>
            <p>2.  The grade of Wiser Referee represents its qualification that can be assigned to officiate certain levels of Wiser matches/tournaments.</p>
            <p>3.  Official Wiser referees certified by the World Wiser Sport Committee are divided into the following four major grades:</p>
        </div>
    )

    const dutyContent = (
        <div className="content">
            <h1 className='referee-header'>II.  Duties and Responsibilities of a Referee in a Wiser Game</h1>
            <p>1. Enforce the rules of the Wiser sport set by World Wiser Sport Committee (WWSC);</p>
            <p>2. Maintain order and safety in the game and ensure fair competitions;</p>
            <p>3. Ensure that the playing field is set up properly and the balls, flags and equipment meet all requirements;</p>
            <p>4. Ensure that all players follow Wiser etiquette and the spirit of the Wiser sport;</p>
            <p>5. Oversee the processes of the Wiser game and instruct the flag person and the record keeper;</p>
            <p>6. Conduct the drawing of lots with team captains to determine which team will serve and also attack first after the serving;</p>
            <p>7. Blow the whistle in the following circumstances: (1) To initiate and conclude the game; (2) Before the player initiates any ball actions except “interception”; (3) Before making each hand gesture; (4) After fouls are committed; (5) For emergency purposes, to call people’s attention.</p>
            <p>8. Make hand gestures for ruling after balls are locked, mishit and struck out;</p>
            <p>9. Enforce penalties after fouls are committed ;</p>
            <p>10. Call upon both teams and announce the game result; and,</p>
            <p>11. Sign and submit the record tracking sheet after the end of game.</p>
        </div>
    )

    const formContent = (
        <div className="content">
            <p><a href="https://worldwisersport.org/pdf/G3_Referee/WWSC-G3_Referee_Work_Record_frm_English_10_24_2015.pdf">WWSC Grade 3 Referee Work Record Form (for the use of Grade 3 Wiser Referee)</a></p>
            <p><a href="https://worldwisersport.org/pdf/Referee_Training/WWSC-Referee_Record_frm_12_02_13_E.pdf">WWSC Grade 4 Referee Work Record Form (for the use of Referee-in-Training)</a></p>
        </div>
    )

    const content = [{ title: "Certification System", content: certContent }, { title: "Duties and Responsibilities", content: dutyContent }, { title: "Referee Work Record Forms for Download", content: formContent }]

    return (
        <div>
            <div className="custom-container">
                <div className="text">
                    <h1>Wiser Referee Training</h1>
                    <CustomTab content={content} />
                </div>
            </div>
        </div>
    )
}
