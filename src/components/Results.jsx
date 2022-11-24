import React from "react";
import { useState } from "react";

function Results(props) {
  console.log(props.data);
  let someValue = 65 * (8.2 / Math.cbrt(props.output * 0.552));
  console.log(someValue);
  const myStyle = { height: someValue };

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

  // function testCube1() {
  //   document.getElementById("horseman").height = "50px";
  // }
  // testCube1();
  return (
    <div>
      <h2 id="resultHeading">Your total CO2 footprint</h2>
      <div className="cubeGrid">
        <img
          style={myStyle}
          id="horseman"
          src="../src/assets/manOnAHorseWhite.svg"
          alt="horseman"
        ></img>
        <div className="scene">
          <div className="cube">
            <div className="cube__face cube__face--front">
              {props.output}kg<p>Cube of Doom®</p>
            </div>
            <div className="cube__face cube__face--back">
              {props.output}kg <p>Cube of Doom®</p>
            </div>
            <div className="cube__face cube__face--right">
              {props.output}kg<p>Cube of Doom®</p>
            </div>
            <div className="cube__face cube__face--left">
              {props.output}kg<p>Cube of Doom®</p>
            </div>
            <div className="cube__face cube__face--top">{props.output}kg</div>
            <div className="cube__face cube__face--bottom">
              {props.output}kg
            </div>
          </div>
        </div>
      </div>
      <h2 id="resultHorse">
        The Cube of Doom® represents the size of your personal carbon footprint.
        It is presented here in a real scale comapred to your size, sitting on a
        horse.
      </h2>

      <button onClick={() => props.formCalculate()} className="goBack">
        Go back
      </button>
      {/* <button onClick={testCube1}></button> */}
    </div>
  );
}

export default Results;
