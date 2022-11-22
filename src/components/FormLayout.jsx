import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import Results from "./Results";
// import { useTransition, animated } from "react-spring";
import { motion, AnimatePresence } from "framer-motion";

function FormLayout() {
  let pageCount = 0;
  const [thisPage, setThisPage] = useState(pageCount);
  const [formFirstState, setFormFirstState] = useState(true);

  // const transition = useTransition(thisPage, {
  //   from: {},
  //   enter: {},
  //   leave: {},
  // });
  console.log(thisPage);
  // function formCalculate() {
  //   pageCount++;
  //   setThisPage(pageCount);
  //   console.log(thisPage);
  // }
  // function formGoBack() {
  //   pageCount--;
  //   setThisPage(pageCount);
  //   console.log(thisPage);
  // }
  function formCalculate() {
    setFormFirstState(!formFirstState);
    console.log("change the state to " + formFirstState);
  }
  const [data, setData] = useState([]);

  return (
    <>
      {/* {thisPage <= 0 && (
        <Form setData={setData} formCalculate={formCalculate} />
      )} */}

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
            // variants={variants}
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
            // variants={variants}
          >
            <Results data={data} formCalculate={formCalculate} />
          </motion.div>
        </AnimatePresence>
      )}

      {/* {thisPage === 1 && <Results data={data} formGoBack={formGoBack} />} */}
    </>
  );
}

export default FormLayout;
