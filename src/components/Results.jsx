import React from "react";

function Results(props) {
  return (
    <div>
      <p>
        hello that is the section in which oyu will get some results so be happy
        pal
      </p>
      <button onClick={() => props.formCalculate()}>Go back</button>
    </div>
  );
}

export default Results;
