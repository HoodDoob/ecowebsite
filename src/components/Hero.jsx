function Hero(props) {
  return (
    <div className="hero">
      <h1 className="templateGLOW" id="heroText">
        CALCULATE <span id="heroExtra">YOUR</span> CARBON FOOTPRINT
      </h1>
      <button onClick={() => props.handleClick()}>Scroll to commentout</button>
    </div>
  );
}

export default Hero;
