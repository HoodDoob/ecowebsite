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
      <h2 id="resultHeading">Your total CO2 footprint</h2>
      <div className="cubeGrid">
        <img src="../src/assets/manOnAHorseWhite.svg" alt="horseman"></img>
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
            <div className="cube__face cube__face--bottom">{props.output}kg</div>
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
