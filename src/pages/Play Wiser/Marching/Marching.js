import './Marching.css'

import YoutubeEmbed from '../../../components/YoutubeEmbed/YoutubeEmbed'

export default function Marching() {

    return (
        <div>
            <div className="custom-container">
                <div className="text marching-text">
                    <h1>WWSC Demo Video (Marching/Etiquette/Interception)</h1>
                    <p>The World Wiser Sport Committee created this video to demonstrate:</p>
                    <p>(1) Standard Marching Style of Wiser Ball Teams;</p>
                    <p>(2) Formal Etiquette of Wiser Ball Teams;</p>
                    <p>(3) How to Perform an “Interception” during Wiser ball games?</p>

                    <YoutubeEmbed embedId="9rSN2WSRePk" className="vid"/>

                </div>
            </div>
        </div>
    )
}
