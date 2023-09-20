import './Tut.css'

import CustomTab from '../../../components/CustomTab/CustomTab'

export default function Tut({history}) {

    const youtubeContent = (
        <div className="content">
            
        </div>
    )

    const youkuContent = (
        <div className="content">
            <p>Youku—Link of Video Tutorial, Full Version： <a href="http://v.youku.com/v_show/id_XNTY1MzcxMjI0.html">http://v.youku.com/v_show/id_XNTY1MzcxMjI0.html</a></p>

            <p>Youku—Link of Video Tutorial, Part 1： <a href="http://v.youku.com/v_show/id_XNTY1MzM2NDgw.html">http://v.youku.com/v_show/id_XNTY1MzM2NDgw.html</a></p>

            <p>Youku—Link of Video Tutorial, Part 2： <a href="http://v.youku.com/v_show/id_XNTY1MzQ1ODA4.html">http://v.youku.com/v_show/id_XNTY1MzQ1ODA4.html</a></p>

            <p>Youku—Link of Video Tutorial, Part 3： <a href="http://v.youku.com/v_show/id_XNTY1NTU3OTk2.html">http://v.youku.com/v_show/id_XNTY1NTU3OTk2.html</a></p>

            <p>Youku—Link of Video Tutorial, Part 4： <a href="http://v.youku.com/v_show/id_XNTY1MzI3NzM2.html">http://v.youku.com/v_show/id_XNTY1MzI3NzM2.html</a></p>
        </div>
    )

    const content = [{ title: "Youtube", content: youtubeContent }, { title: "Youku", content: youkuContent }]

  return (
    <div>
        <div className="custom-container">
            <div className="text">
                <h1>Video Tutorial: “How to Play Wiser Ball”</h1>
                <CustomTab content={content} />
            </div>
        </div>
    </div>
  )
}
