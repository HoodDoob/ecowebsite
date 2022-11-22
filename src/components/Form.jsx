import React from 'react'
import {useRef} from 'react'

function Form(props) {
    const theForm = useRef(null);
/*     const array = [{
        name: "",
        time: "",
        amount: "",
    }] */

    function calculate(e) {
        e.preventDefault();
        const nextData = [];

    //* calculating total hours and minutes on the apps *//
    const instagramYearly = parseInt(theForm.current.elements.instagram.value) * 365;
    const instagramCo2 = instagramYearly * 1.05;

        if (instagramYearly > 0) {
            nextData.push({
            name: "instagram",
            time: instagramYearly,
            amount: instagramCo2,
        });
        }

    const tiktokYearly = parseInt(theForm.current.elements.tiktok.value) * 365;
    const tiktokCo2 = tiktokYearly * 2.63;

        if (tiktokYearly > 0) {
            nextData.push({
            name: "tiktok",
            time: tiktokYearly,
            amount: tiktokCo2,
        });
        }

    const streamingYearly = parseInt(theForm.current.elements.streaming.value) * 365;
    const streamingCo2 = streamingYearly * 91;

        if (streamingYearly > 0) {
            nextData.push({
            name: "streaming",
            time: streamingYearly,
            amount: streamingCo2,
        });
        }

    const email = parseInt(theForm.current.elements.email.value);
    const emailCo2 = email * 0.3;

        if (email > 0) {
            nextData.push({
            name: "email",
            time: 0,
            amount: emailCo2,
        });
        }

    const totalMinutes = instagramYearly + tiktokYearly + streamingYearly;

    const days = Math.floor(totalMinutes / 60 / 24);
    const hours = days % 24;
    const minutes = totalMinutes % 60;

    console.log(
      `You waste ${days} days, ${hours} hours and ${minutes} minutes on the internet every year`
    );

    const totalCo2 = instagramCo2 + tiktokCo2 + streamingCo2 + emailCo2;

    const kilograms = Math.floor(totalCo2 / 1000);
    const grams = totalCo2 % 1000;

    console.log(
      `That's ${kilograms} kilograms and ${grams} grams of Co2 bitch`
    );

  props.setData(nextData);
  }

  return (
    <form ref={theForm} onSubmit={calculate}>
      <div className="form-control">
        <label htmlFor="form-name">Instagram usage</label>
        <input type="number" name="instagram" id="form-instagram"/>
    </div>

      <div className="form-control">
        <label htmlFor="form-email">TikTok usage</label>
        <input type="number" name="tiktok" id="form-tiktok" />
      </div>

      <div className="form-control">
        <label htmlFor="form-email">Streaming service usage</label>
        <input type="number" name="streaming" id="form-streaming" />
      </div>

      <div className="form-control">
        <label htmlFor="form-email">Unread emails</label>
        <input type="number" name="email" id="form-email" />
      </div>

      <button>Calculate</button>
    </form>
    )
}

export default Form



  /*   instagram: theForm.current.elements.instagram.value,
        tiktok: theForm.current.elements.tiktok.value,
        streaming: theForm.current.elements.streaming.value,
        emails: theForm.current.elements.email.value,
 */