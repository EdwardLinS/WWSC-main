import './Learn.css';

import { useState, useRef, useEffect } from 'react';
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export default function Learn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/wiser-sport/the-rules-of-wiser-sport/");
  }
  const [checked, setChecked] = useState(false);
  const containerRef = useRef(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    setChecked(inView);
  }, [inView])

  return (
    <div className='learn' ref={containerRef}>
        <h1 class="heading learn-heading">Learn the Rules</h1>
        <img id="learn-pic" src="/assets/Landing/Play_T_1.jpg" alt="" />
        <div ref={ref}/>
        <div className="caption learn-caption" >
          <Slide direction="right" in={checked} container={containerRef.current} timeout={{ enter: 500}} style={{transition: "ease-in"}}>
            <p>{`Some text here ${inView}.`}</p>
          </Slide>
          <Slide direction="left" in={checked} container={containerRef.current} timeout={{ enter: 500}} style={{transition: "ease-in"}}>
            <div style={{margin: "0"}}>
              <Button className="button learn-more" color="warning" outline="true" onClick={handleClick}><p>Learn more!</p></Button>
            </div>
          </Slide>
        </div>
    </div>
  )
}
