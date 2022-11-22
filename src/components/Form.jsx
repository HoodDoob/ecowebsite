import React from "react";
import { useRef, useState } from "react";

function Form(props) {
  const [buttonVisible, setButtonVisible] = useState(false);
  const theForm = useRef(null);
  /*     const array = [{
        name: "",
        time: "",
        amount: ""
    }] */

  function calculate(e) {
    e.preventDefault();
    const nextData = [];

    //* calculating total hours and minutes on the apps *//
    const instagramYearly =
      parseInt(theForm.current.elements.instagram.value) * 365;
    const instagramCo2 = instagramYearly * 1.05;

    if (instagramYearly > 0) {
      nextData.push({
        name: "instagram",
        time: minutesToHours(instagramYearly),
        amount: gramsToKilos(instagramCo2),
      });
    }

    const tiktokYearly = parseInt(theForm.current.elements.tiktok.value) * 365;
    const tiktokCo2 = tiktokYearly * 2.63;

    if (tiktokYearly > 0) {
      nextData.push({
        name: "tiktok",
        time: minutesToHours(tiktokYearly),
        amount: gramsToKilos(tiktokCo2),
      });
    }

    const streamingYearly =
      parseInt(theForm.current.elements.streaming.value) * 365;
    const streamingCo2 = streamingYearly * 91;

    if (streamingYearly > 0) {
      nextData.push({
        name: "streaming",
        time: minutesToHours(streamingYearly),
        amount: gramsToKilos(streamingCo2),
      });
    }

    const email = parseInt(theForm.current.elements.email.value);
    const emailCo2 = email * 0.3;

    if (email > 0) {
      nextData.push({
        name: "email",
        time: 0,
        amount: gramsToKilos(emailCo2),
      });
    }

    function minutesToHours(time) {
      const days = Math.floor(time / 60 / 24);
      const hours = days % 24;
      const minutes = time % 60;

      return {
        days: days,
        hours: hours,
        minutes: minutes,
      };
    }

    function gramsToKilos(amount) {
      const kilograms = Math.floor(amount / 1000);
      const grams = amount % 1000;

      return {
        kilograms: kilograms,
        grams: grams,
      };
    }

    if (instagramYearly === "") {
      instagramYearly = 0;
    }
    const totalMinutes = instagramYearly + tiktokYearly + streamingYearly;
    const totalCo2 = instagramCo2 + tiktokCo2 + streamingCo2 + emailCo2;

    function totalAmount() {
      let sum = 0;

      nextData.forEach((obj) => {
        sum += obj.time;
      });

      return sum;
    }

    console.log(totalAmount());

    nextData.push({
      name: "total",
      time: minutesToHours(totalMinutes),
      amount: gramsToKilos(totalCo2),
    });

    props.setData(nextData);
    console.log("yes we submitted");
  }

  function popNumber() {
    setButtonVisible(true);
    console.log("pump up the button");
  }
  return (
    <form ref={theForm} onSubmit={calculate}>
      <div className="form-control">
        <label htmlFor="form-name">Instagram usage</label>
        <input
          type="number"
          name="instagram"
          id="form-instagram"
          onInput={popNumber}
        />
      </div>

      <div className="form-control">
        <label htmlFor="form-email">TikTok usage</label>
        <input
          type="number"
          name="tiktok"
          id="form-tiktok"
          onInput={popNumber}
        />
      </div>

      <div className="form-control">
        <label htmlFor="form-email">Streaming service usage</label>
        <input
          type="number"
          name="streaming"
          id="form-streaming"
          onInput={popNumber}
        />
      </div>

      <div className="form-control">
        <label htmlFor="form-email">Unread emails</label>
        <input type="number" name="email" id="form-email" onInput={popNumber} />
      </div>
      {buttonVisible && (
        <button onClick={() => props.formCalculate()}>Calculate</button>
      )}
    </form>
  );
}

export default Form;
