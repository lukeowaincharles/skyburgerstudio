import React, { useContext } from "react";
import ExperienceData from "../../Data/ExperienceData.json";
import { BrowserColour } from "../Icons";
import { IntersectionContext } from "../Utilities/IntersectionObserver";
import { motion } from "framer-motion";

function Experience() {
  const CONTENT = ExperienceData.content,
    { inView } = useContext(IntersectionContext);

  const transition = {
    duration: 0.8,
    delay: 0,
  };

  const variantsLeft = {
    hidden: {
      scale: 1,
      opacity: 0,
      y: "400px",
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
    },
  };

  const variantsRight = {
    hiddenRight: {
      scale: 1,
      opacity: 0,
      transition,
      y: "400px",
    },
    showRight: {
      scale: 1,
      opacity: 1,
      transition,
      y: 0,
    },
  };

  return (
    <section className="experience background--white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              exit="hidden"
              transition={{ delay: 0.3, duration: 0.8 }}
              variants={variantsLeft}
            >
              <div className="browser--icon">{BrowserColour}</div>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              initial="hiddenRight"
              animate={inView ? "showRight" : "hiddenRight"}
              exit="hiddenRight"
              variants={variantsRight}
            >
              <h2>{CONTENT[0].title}</h2>
              {CONTENT[0].text.map(function (paragraph, i) {
                return <p key={i}>{paragraph}</p>;
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
