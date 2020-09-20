import React, { useContext } from "react";
import IntroData from "../../Data/IntroData.json";
import { WeLoveWebsites } from "../Icons";
import { IntersectionContext } from "../Utilities/IntersectionObserver";
import { motion } from "framer-motion";

function Intro() {
  const CONTENT = IntroData.content,
    { inView } = useContext(IntersectionContext);

  const transition = {
    duration: 0.8,
    delay: 0,
  };

  const variantsLeft = {
    hidden: {
      scale: 1,
      opacity: 0,
      transition,
      y: "400px",
    },
    show: {
      scale: 1,
      opacity: 1,
      transition,
      y: 0,
    },
  };

  const variantsRight = {
    hiddenRight: {
      scale: 1,
      opacity: 0,
      y: "400px",
    },
    showRight: {
      scale: 1,
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="intro background--white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              exit="hidden"
              variants={variantsLeft}
            >
              <h1>{CONTENT[0].title}</h1>
              <p>{CONTENT[0].text}</p>
            </motion.div>
          </div>
          <div className="col-md-6 d-md-flex justify-content-md-end">
            <motion.div
              initial="hiddenRight"
              animate={inView ? "showRight" : "hiddenRight"}
              exit="hiddenRight"
              transition={{ delay: 0.3, duration: 0.8 }}
              variants={variantsRight}
            >
              {WeLoveWebsites}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
