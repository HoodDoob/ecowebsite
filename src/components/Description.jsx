import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { React, useEffect, useRef, forwardRef } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ num }) => {
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
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h2>{num}</h2>
    </motion.div>
  );
};

export default function Description(props) {
  const TestDescription = forwardRef((props, ref) => (
    <div className="App" ref={props.ref}>
      <Box
        num="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
"
      />
      <Box num="No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because of those..." />
      <Box num="...who do not know." />
    </div>
  ));
  return <TestDescription ref={props.ref}></TestDescription>;
}
