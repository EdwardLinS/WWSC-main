import "./Intro.css"

import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";


export default function Intro() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about-us/introduction-to-wiser-sport/");
  }

  const parallax = useParallax({
    speed: -25,
  });

  return (
    <div className="intro">
        <img ref={parallax.ref} id="intro-pic" src="/assets/Landing/intro.jpg" alt="intro picture" />

        <div className="textbox">
            <h1>Intro To Wiser</h1>
            <p id="subtitle">A short tutorial to get you started into the world of Wiser!</p>
            {/* <div className="button start" onClick={handleClick}>
              <p>Get started!</p>
            </div> */}

            <Button className="button start" color="danger" outline="true" onClick={handleClick}><p>Get Started!</p></Button>
        </div>
    </div>
  )
}
