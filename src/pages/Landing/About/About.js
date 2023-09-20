import './About.css';

import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


export default function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/wiser-sport/the-rules-of-wiser-sport/");
  }

  return (
    <div className="about">
      <h1 class="heading about-head">About Wiser</h1>
      <div className="about-content">
        <img id="about-pic" src="/assets/Landing/Event_inaug_1.jpg" alt="" />
        <div className="caption about-caption">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus. Neque egestas congue quisque egestas diam in arcu. Vitae auctor eu augue ut lectus arcu bibendum. Enim praesent elementum facilisis leo vel. Id interdum velit laoreet id donec ultrices tincidunt arcu. Duis convallis convallis tellus id. </p>
          <Button className="button learn-more about-button" color="warning" outline="true" onClick={handleClick}><p>Learn more!</p></Button>
        </div>
      </div>
    </div>
  )
}
