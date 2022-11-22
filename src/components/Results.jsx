import React from "react";

function Results(props) {
  console.log(props.data);
    
  function findTotal() {
    props.data.filter((object) => {
      if (object.name === "total") {
       const amountTotal = object.amount;
       const timeTotal = object.time;

       console.log(amountTotal, timeTotal);
       return {amountTotal, timeTotal}
     }});
  }
   
  findTotal();

  return (
    <div>
      <h1></h1>
      <p>
        
      </p>
      <button onClick={() => props.formCalculate()}>Go back</button>
    </div>
  );
}

export default Results;
