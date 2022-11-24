import React from "react";
import {useState} from 'react';

function Results(props) {
  console.log(props.data);

/*   function calculating() {  
        data.filter((object) => {
        const amountTotal = object.amount;
        const timeTotal = object.time;
        if (object.name === "total") {
          let kilograms = amountTotal.grams;

          setOutput(() => {
          return kilograms;
          })
        }
      });
    } */

  function testCube1() {
    const cube = document.querySelector(".cube");
    const face = document.querySelectorAll(".cube__face");
    // face.forEach((face) => {
    //   face.style.height = "50px";
    //   face.style.width = "100px";
    // });

    cube.classList.add("show-top");
  }
  return (
    <div>
      <h2 id="resultHeading">{props.output}</h2>
      <div className="cubeGrid">
        <div className="scene">
          <div className="cube">
            <div className="cube__face cube__face--front">935kg</div>
            <div className="cube__face cube__face--back">935kg</div>
            <div className="cube__face cube__face--right">935kg</div>
            <div className="cube__face cube__face--left">935kg</div>
            <div className="cube__face cube__face--top">935kg</div>
            <div className="cube__face cube__face--bottom">935kg</div>
          </div>
        </div>
      </div>
      <button onClick={() => props.formCalculate()}>Go back</button>
      {/* <button onClick={testCube1}></button> */}
    </div>
  );
}

export default Results;
