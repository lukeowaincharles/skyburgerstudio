import React, { useContext } from "react";
import AboutData from "../../Data/AboutData.json";
import { Event } from "../Tracking/index";
import { IntersectionContext } from "../Utilities/IntersectionObserver";
import { motion } from "framer-motion";

function About() {
  const CONTENT = AboutData.content,
    LINKCONTENT = AboutData.links,
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

  const links = LINKCONTENT.map((item, index) => {
    function handleEvent(item) {
      Event("Find out more", item.title, item.link);
    }

    return (
      <p className="font-weight-bold" key={index}>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleEvent(item);
          }}
        >
          {item.text}
        </a>
      </p>
    );
  });

  return (
    <section className="about background--white" id="about" name="#about">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          exit="hidden"
          variants={variantsLeft}
        >
          <div className="row">
            <div className="col-md-7">
              <h2 dangerouslySetInnerHTML={{ __html: `${CONTENT[0].title}` }} />
              {CONTENT[0].text.map((paragraph, i) => (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{ __html: `${paragraph}` }}
                />
              ))}
              {links}
            </div>
            <div className="col-md-5 column">
              <div className="about__images">
                <img src={LINKCONTENT[1].image} alt={LINKCONTENT[1].alt} />
                <img src={LINKCONTENT[0].image} alt={LINKCONTENT[0].alt} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
