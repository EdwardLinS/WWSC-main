/** @format */

import "./Rules.css";

import CustomTab from "../../../components/CustomTab/CustomTab";

export default function Rules() {
    const updatedContent = (
        <div style={{ marginTop: "20px", fontSize: "1rem", lineHeight: "2rem" }}>
            <img src="/WWSC logo_ltr_head.png" alt="logo" style={{ width: "100px" }} /> <br /> <br />
            <div style={{ textIndent: "7rem" }}>
                <p>
                    When holding official Wiser ball competitions, many Wiser sport organizations are faced with the
                    issues of securing suitable competition venues, limitations imposed by the agenda of the
                    competitions, and having a large number of teams participating in the competitions. Therefore, it is
                    difficult for the organizers of the competitions to complete all the games on schedule without
                    specifically defining an allowed range of Wiser competition fields and the time duration of each
                    game. In response to these practical needs, after several discussion meetings, the World Wiser Sport
                    Committee (WWSC) established this special edition of the Rules of Wiser Sport Handbook{" "}
                    <strong>for Official Wiser Ball Competitions</strong> (hereafter referred to as the Competition
                    Rules Handbook). This Competition Rules Handbook uniformly set out the range of the competition
                    field size and the time duration of each game. Corresponding modifications based on these new
                    stipulations have also been made to the original general Wiser sport rules.
                </p>
                <p>
                    In addition, since the WWSC officially published{" "}
                    <a href="https://worldwisersport.org/pdf/rules/Rules%20of%20Wiser%20Sport%20Handbook_11_30_2013_English_V1.0.pdf">
                        the Rules of Wiser Sport Handbook version 1.0
                    </a>{" "}
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
                    original Rules of Wiser Sport Handbook, English Version 1.0 and published the version 2.0 for{" "}
                    <strong>the promotion of Wiser sport and general practice Wiser games</strong>
                </p>
            </div>
            <p>Please download two editions of Rules of Wiser Sport Handbook from the following web links:</p>
            <div style={{ paddingLeft: "1.2rem", lineHeight: "2.5vw" }}>
                <a href="https://worldwisersport.org/pdf/rules/Rules%20of%20Wiser%20Sport%20Handbook_For_Official_Wiser%20Ball%20Competitions_03_21_2018_English_V1.0.pdf">
                    （1）Rules of Wiser Sport Handbook <strong>【For Official Wiser Ball Competitions】</strong>English
                    Version 1.0
                </a>
                <br />
                <a href="https://worldwisersport.org/pdf/rules/Rules%20of%20Wiser%20Sport%20Handbook_For%20General%20Promotion%20and%20Practice%20Games_03_21_2018_English_V2.0.pdf">
                    （2）Rules of Wiser Sport Handbook<strong>【For General Promotion and Practice Games】</strong>
                    English Version 2.0
                </a>
            </div>
            <div className="signature">
                <p>The Secretariat of World Wiser Sport Committee</p>
                <p>March 21, 2018</p>
            </div>
        </div>
    );

    const oldContent = (
        <div style={{ marginTop: "2rem", fontSize: "1.75rem", lineHeight: "3.5rem" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    paddingBottom: "2vw",
                }}
            >
                <img src="/assets/Wiser Sport/English_Cover.jpg" style={{ width: "75rem", height: "50rem" }} /> <br />{" "}
                <br />
                <div style={{ paddingLeft: "2vw", paddingRight: "2vw", textIndent: "7rem" }}>
                    <p>
                        The World Wiser Sport Committee (WWSC) hereby officially publishes the English Version 1.0 of “
                        <a href="https://worldwisersport.org/pdf/rules/Rules%20of%20Wiser%20Sport%20Handbook_11_30_2013_English_V1.0.pdf">
                            <strong>Rules of Wiser Sport Handbook</strong>
                        </a>
                        ” (hereafter “Rules Handbook“). This Rules Handbook will provide players with the basic rules
                        and standards to be followed in all Wiser Sport competitions.{" "}
                    </p>
                    <p>
                        However, with respect to competitions on a national, state/provincial, or club level, the
                        organization hosting the competition may, in accordance with this Rules Handbook, establish
                        policies of competition based on the specific circumstances of that particular time and place.
                        Formal international-level Wiser competitions must follow this Rules Handbook formulated and
                        published by the WWSC.
                    </p>
                </div>
            </div>
            <div style={{ textIndent: "3vw" }}>
                <p>
                    The WWSC reserves all rights to revise this Rules Handbook and to interpret all Wiser competition
                    rules. The WWSC is a non-profit organization legally established in the United States. We teach
                    everyone free of charge the techniques and rules of the Wiser sport. We hope to enable more and more
                    people to experience the incomparable benefits and joy that playing Wiser ball provides. Therefore,
                    this Rules Handbook may be used only for the non-profit purposes of promoting the Wiser sport.
                    According to law, it is forbidden to use this Rules Handbook for any profit-making purposes.
                </p>
            </div>
            <div style={{ fontWeight: "bold", lineHeight: "3.5rem", textAlign: "right", paddingTop: "1vw" }}>
                <p>World Wiser Sport Committee</p>
                <p>November 30, 2013</p>
            </div>
            <p>Please click the following link to download the rules handbook in pdf format.</p>
            <a href="https://worldwisersport.org/pdf/rules/Rules%20of%20Wiser%20Sport%20Handbook_11_30_2013_English_V1.0.pdf">
                WWSC “Rules of Wiser Sport Handbook”, English Version 1.0 (11/30/2013)
            </a>
        </div>
    );

    const content = [
        { title: "Updated Rules(03/21/2018)", content: updatedContent },
        { title: "Old Rules Version 1.0(11/30/2013)", content: oldContent },
    ];

    return (
        <div>
            <div className="container-fluid">
                <div className="text-container">
                    <h1>The Rules of Wiser Sport</h1>
                    <CustomTab content={content} />
                </div>
            </div>
        </div>
    );
}
