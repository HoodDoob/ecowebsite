import { useState, useRef, forwardRef } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Description from "./components/Description";
import FormLayout from "./components/FormLayout";
import Results from "./components/Results";

function App() {
  const ref = useRef();

  const handleClick = () => {
    console.log("you passed ufnction up");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero handleClick={handleClick} />
      <div ref={ref}>
        <Description />
      </div>

      <FormLayout />
      <Results />
    </div>
  );
}

export default App;
