import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { React, useEffect, useRef, forwardRef } from "react";

const variant1 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};
const variant2 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};
const variant3 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const BoxOne = ({ desc }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={variant1}
      initial="hidden"
      animate={control}
    >
      <h2 className="scrollTest">{desc}</h2>
    </motion.div>
  );
};
const BoxTwo = ({ desc }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={variant2}
      initial="hidden"
      animate={control}
    >
      <h2 className="scrollTest">{desc}</h2>
    </motion.div>
  );
};
const BoxThree = ({ desc }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box3"
      ref={ref}
      variants={variant3}
      initial="hidden"
      animate={control}
    >
      <h2 className="scrollTest">{desc}</h2>
    </motion.div>
  );
};

export default function Description(props) {
  return (
    <div ref={props.ref}>
      <BoxOne desc="Hello dear internet conneseuir. Have you ever wondered what is the consequence of your online activity?" />
      <BoxTwo desc="You can't run away from being responsible, your actions will have consequences in the near future" />
      <BoxThree desc="Now, let's see how you behave in the digital realm 🙂" />
    </div>
  );
}
