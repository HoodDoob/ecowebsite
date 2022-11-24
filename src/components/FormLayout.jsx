import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import Results from "./Results";
import { motion, AnimatePresence } from "framer-motion";

function FormLayout(props) {
  const [formFirstState, setFormFirstState] = useState(true);
  const [output, setOutput] = useState();
  const [instaInput, setInstaInput] = useState();
  const [tiktokInput, setTiktokInput] = useState();
  const [streamingInput, setStreamingInput] = useState();
  const [emailInput, setEmailInput] = useState();


  function formCalculate() {
    setFormFirstState(!formFirstState);
    console.log("change the state to " + formFirstState);
  }

  return (
    <>
      {formFirstState ? (
        <AnimatePresence>
          <motion.div
            key="inp"
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 1 },
            }}
            className="inputWrapper"
            transition={{ duration: 0.5 }}
            exit={{ x: "-150%", opacity: 1, scale: 1 }}
            initial={{ x: "-150%", opacity: 1, scale: 1 }}
          >
            <Form setData={props.setData} data={props.data}
            setInstaInput={setInstaInput} instaInput={instaInput} 
            setTiktokInput={setTiktokInput} tiktokInput={tiktokInput}
            setStreamingInput={setStreamingInput} streamingInput={streamingInput}
            setEmailInput={setEmailInput} emailInput={emailInput}
            setOutput={setOutput} 
            formCalculate={formCalculate} />
          </motion.div>{" "}
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            key="otp"
            initial={{ x: "150%", opacity: 1, scale: 1 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            className="resultWrapper"
            transition={{ duration: 1 }}
            exit={{
              x: "150%",
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 },
            }}
          >
            <Results data={props.data} output={output} formCalculate={formCalculate} />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default FormLayout;
