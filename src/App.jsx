import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Description from "./components/Description";
import FormLayout from "./components/FormLayout";
import Results from "./components/Results";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <Description />
      <FormLayout />
      <Results />
    </div>
  );
}

export default App;
