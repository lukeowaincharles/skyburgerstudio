import React from "react";
import { motion } from "framer-motion";

function StaggerLi({ children, className }) {
  const item = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

export default StaggerLi;
