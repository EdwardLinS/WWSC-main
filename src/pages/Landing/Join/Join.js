import './Join.css';

import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Join() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/contact-us/");
    }

  return (
    <div className="join">
        <h1 class="heading join-head">Join Us!</h1>
        <div className="join-content">
            <img id="join-pic" src="/assets/Landing/Event_HK_2.jpg" alt="" />
            <div className="caption join-caption">
                <i>
                    <p>Tel: 626.795.7485</p>
                    <p>Email: info@worldwisersport.org</p>
                </i>
                <Button className="button learn-more" color="warning" outline="true" onClick={handleClick}><p>Learn more!</p></Button>
            </div>
        </div>
    </div>
  )
}
