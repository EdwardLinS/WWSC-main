import './Equipment.css';

import CustomTab from '../../../components/CustomTab/CustomTab'

export default function Equipment() {

    const ballsContent = (
        <div className="content">
            <h3 style={{fontSize: "1.5vw", fontWeight: "bold"}}>1.  The Balls for Wiser Game:</h3>
            <p>Each ball shall have a diameter of about <strong>90</strong> millimeters and weighs about <strong>168</strong> grams. There are 7 red balls and 7 white balls. The balls of each color are numbered from 1 to 7.</p>
            <img src="/assets/Wiser Sport/Balls.jpg" alt="" style={{width: "50vw"}}/>
        </div>
    )

    const flagsContent = (
        <div className="content">
            <h3 style={{fontSize: "1.5vw", fontWeight: "bold"}}>2.  The Flags for Wiser Game:</h3>
            <p>Prepare <strong>10</strong> yellow and <strong>10</strong> red flags. The design and size of each flag is shown in the diagram below. The shape of the flag is an <strong>isosceles right triangle</strong>. The length of two equal sides of the triangle is <strong><u>one foot</u></strong>. When inserting a flag into the ground, the pole of the flag should be <strong><u>2 feet</u></strong> above the ground.</p>
            <img src="/assets/Wiser Sport/Flags.png" alt="" style={{width: "50vw"}}/>
            <p style={{paddingLeft: "1vw", fontSize: "0.75vw", color: "gray"}}>Specifications & Dimensions of Flags</p>
        </div>
    )

    const ropeContent = (
        <div className="content">
            <h3 style={{fontSize: "1.5vw", fontWeight: "bold"}}>3. Prepare a 12-meter rope to delineate the “Centerline.”</h3>
            <img src="/assets/Wiser Sport/Rope.gif" alt="" style={{width: "50vw"}}/>
        </div>
    )


    const content = [{ title: "Balls", content: ballsContent }, { title: "Flags", content: flagsContent }, { title: "Rope", content: ropeContent }]

    return (
        <div>
            <div className="custom-container">
                <div className="text">
                    <h1>Balls and Basic Equipment for Wiser Sport</h1>
                    <CustomTab content={content} />
                </div>
            </div>
        </div>
    )
}
