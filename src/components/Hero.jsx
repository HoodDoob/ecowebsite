import React, { useRef } from "react";

function Hero(props) {
  return (
    <div>
      <h1 id="heroText">
        CALCULATE <span id="heroExtra">YOUR</span> CARBON FOOTPRINT
      </h1>
      <button onClick={() => props.handleClick()}>Scroll to commentout</button>
    </div>
  );
}

export default Hero;
