function Hero(props) {
  return (
    <div className="hero">
      <h1 className="templateGLOW" id="heroText">
        {/* CALCULATE <span className="templateGLOW2">YOUR</span> CARBON FOOTPRINT */}
        CALCULATE YOUR CARBON FOOTPRINT
      </h1>
      <div className="arrow" onClick={() => props.handleClick()}>
        ↓ ↓ ↓
      </div>
    </div>
  );
}

export default Hero;
