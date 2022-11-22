import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import Results from "./Results";
// import { useTransition, animated } from "react-spring";
import { motion, AnimatePresence } from "framer-motion";

function FormLayout() {
  const [formFirstState, setFormFirstState] = useState(true);

  function formCalculate() {
    setFormFirstState(!formFirstState);
    console.log("change the state to " + formFirstState);
  }
  const [data, setData] = useState([]);

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
            <Form setData={setData} formCalculate={formCalculate} />
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
            <Results data={data} formCalculate={formCalculate} />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default FormLayout;
