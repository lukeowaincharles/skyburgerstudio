import React, { useContext } from "react";
import { motion } from "framer-motion";
import { IntersectionContext, IntersectionObserver } from "../IntersectionObserver";

function StaggerUl({ children, className }) {
  const { inView } = useContext(IntersectionContext);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <IntersectionObserver>
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        variants={container}
        className={className}
      >
        {children}
      </motion.div>
    </IntersectionObserver>
  );
}

export default StaggerUl;
