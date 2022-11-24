import React from "react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    let instagramYearly =
      parseInt(theForm.current.elements.instagram.value) * 365;
    let instagramCo2 = instagramYearly * 1.05;
    if (instagramYearly > 0) {
      nextData.push({
        name: "instagram",
        time: minutesToHours(instagramYearly),
        amount: gramsToKilos(instagramCo2),
      });
    } else {
      instagramYearly = 0;
      instagramCo2 = 0;
    }

    let tiktokYearly = parseInt(theForm.current.elements.tiktok.value) * 365;
    let tiktokCo2 = tiktokYearly * 2.63;

    if (tiktokYearly > 0) {
      nextData.push({
        name: "tiktok",
        time: minutesToHours(tiktokYearly),
        amount: gramsToKilos(tiktokCo2),
      });
    } else {
      tiktokYearly = 0;
      tiktokCo2 = 0;
    }

    let streamingYearly =
      parseInt(theForm.current.elements.streaming.value) * 365;
    let streamingCo2 = streamingYearly * 91;

    if (streamingYearly > 0) {
      nextData.push({
        name: "streaming",
        time: minutesToHours(streamingYearly),
        amount: gramsToKilos(streamingCo2),
      });
    } else {
      streamingYearly = 0;
      streamingCo2 = 0;
    }

    let email = parseInt(theForm.current.elements.email.value);
    let emailCo2 = email * 0.3;

    if (email > 0) {
      nextData.push({
        name: "email",
        time: 0,
        amount: gramsToKilos(emailCo2),
      });
    } else {
      email = 0;
      emailCo2 = 0;
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

    const totalTime = instagramYearly + tiktokYearly + streamingYearly;
    const totalAmount = instagramCo2 + tiktokCo2 + streamingCo2 + emailCo2;
    nextData.push({
      name: "total",
      time: minutesToHours(totalTime),
      amount: gramsToKilos(totalAmount),
    });

    props.setData(nextData);


    props.setOutput(totalAmount);
  }

  function popNumber() {
    setButtonVisible(true);
    console.log("pump up the button");
  }

  return (
    <form ref={theForm} onSubmit={calculate} className="inputForm">
      <div className="form-control">
        <label htmlFor="form-name">
          Instagram usage <span>(min / day)</span>
        </label>
        <input
          type="number"
          name="instagram"
          id="form-instagram"
          placeholder="How much time do you spend on Instagram daily?"
          onInput={popNumber}
        />
      </div>

      <div className="form-control">
        <label htmlFor="form-email">
          TikTok usage<span>(min / day)</span>
        </label>
        <input
          type="number"
          name="tiktok"
          id="form-tiktok"
          placeholder="How much time do you spend on TikTok daily?"
          onInput={popNumber}
        />
      </div>

      <div className="form-control">
        <label htmlFor="form-email">
          Streaming service usage<span>(min / day)</span>
        </label>
        <input
          type="number"
          name="streaming"
          id="form-streaming"
          placeholder="How much time do you spend on Streaming Platforms daily?"
          onInput={popNumber}
        />
      </div>

      <div className="form-control">
        <label htmlFor="form-email">
          Unread emails<span>(number of emails)</span>
        </label>
        <input
          type="number"
          name="email"
          id="form-email"
          placeholder="How many emails have you got in your inbox?"
          onInput={popNumber}
        />
      </div>
      {buttonVisible && (
        <motion.div
          key="otp"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="btnopacity"
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => props.formCalculate()}>Calculate</button>
        </motion.div>
      )}
    </form>
  );
}

export default Form;
