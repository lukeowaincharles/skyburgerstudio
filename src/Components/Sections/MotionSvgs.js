import React, { useRef } from "react";
import { motion } from "framer-motion";

function MotionSvgs() {
  const constraintsRef = useRef(null);

  return (
    <span>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.svg
        drag
        dragConstraints={{ top: -150, left: -150, right: 150, bottom: 50 }}
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--code"
      >
        <circle cx="74" cy="74" r="74" fill="#16AB59" />
        <circle cx="74" cy="74" r="69" stroke="white" strokeWidth="10" />
        <line
          x1="83.9197"
          y1="42.4343"
          x2="64.2269"
          y2="108.199"
          stroke="white"
          strokeWidth="10"
        />
        <path d="M52 96.5L29 73.5L52 51" stroke="white" strokeWidth="10" />
        <path d="M96 51.5L119 74.5L96 97" stroke="white" strokeWidth="10" />
      </motion.svg>

      <motion.svg
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--heart--pink"
      >
        <circle cx="74" cy="74" r="74" fill="#FF4141" />
        <circle cx="74" cy="74" r="69" stroke="white" strokeWidth="10" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M104.481 75.481L104.508 75.454L104.535 75.427L104.795 75.1668L105.066 74.8691C111.066 68.2783 110.88 58.0556 104.508 51.6832C98.1353 45.3108 87.9127 48.1245 81.3218 54.125L81.023 54.3971L74.6754 60.7447L74.3729 60.4515L74.2659 60.5489L67.7028 53.9858L67.606 53.892C61.0305 47.518 50.528 44.5809 44.0275 51.0814C37.5271 57.5819 37.4641 68.0843 43.8381 74.6598L43.932 74.7567L74.5685 105.393L104.481 75.481ZM36.6579 81.62C26.4881 71.1286 26.5876 54.3792 36.9565 44.0103C47.3254 33.6414 64.0748 36.5419 74.5662 46.7117L74.5685 46.7094L74.5897 46.7305C85.111 37.1515 101.412 34.4454 111.579 44.6121C121.746 54.7789 122.039 71.0799 112.46 81.6013L112.481 81.6224L111.579 82.5251L74.5685 119.535L36.6556 81.6224L36.6579 81.62Z"
          fill="white"
        />
      </motion.svg>

      <motion.svg
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--smiles"
      >
        <circle cx="74" cy="74" r="74" fill="#FFDB00" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138 74C138 109.346 109.346 138 74 138C38.6538 138 10 109.346 10 74C10 38.6538 38.6538 10 74 10C109.346 10 138 38.6538 138 74ZM148 74C148 114.869 114.869 148 74 148C33.1309 148 0 114.869 0 74C0 33.1309 33.1309 0 74 0C114.869 0 148 33.1309 148 74ZM99.575 84.5744C97.3964 96.1397 87.044 105 74.5 105C61.956 105 51.6036 96.1397 49.425 84.5744L39.5978 86.4256C42.6718 102.744 57.1746 115 74.5 115C91.8254 115 106.328 102.744 109.402 86.4256L99.575 84.5744ZM59 59.5C59 63.6421 55.6421 67 51.5 67C47.3579 67 44 63.6421 44 59.5C44 55.3579 47.3579 52 51.5 52C55.6421 52 59 55.3579 59 59.5ZM93.5 67C97.6421 67 101 63.6421 101 59.5C101 55.3579 97.6421 52 93.5 52C89.3579 52 86 55.3579 86 59.5C86 63.6421 89.3579 67 93.5 67Z"
          fill="white"
        />
      </motion.svg>

      <motion.svg
        drag
        dragConstraints={{ top: -50, left: -100, right: 100, bottom: 250 }}
        width="150"
        height="149"
        viewBox="0 0 150 149"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--peace"
      >
        <circle cx="74.7383" cy="74.6111" r="74.2937" fill="#F131DE" />
        <circle
          cx="74.7383"
          cy="74.6111"
          r="69.2739"
          stroke="white"
          strokeWidth="10.0397"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.7185 24.6605C71.3695 24.4966 73.0441 24.4127 74.7383 24.4127C76.4325 24.4127 78.1071 24.4966 79.7582 24.6605C105.125 27.1791 124.937 48.5815 124.937 74.6111C124.937 102.335 102.462 124.81 74.7383 124.81C47.0145 124.81 24.5399 102.335 24.5399 74.6111C24.5399 48.5815 44.3516 27.1791 69.7185 24.6605ZM34.5796 74.6111C34.5796 54.1321 49.9086 37.2333 69.7185 34.7631V67.5998L41.4783 97.1237C37.1236 90.7027 34.5796 82.954 34.5796 74.6111ZM48.132 104.692C54.0364 109.919 61.491 113.433 69.7185 114.459V82.1244L48.132 104.692ZM79.7582 81.7786V114.459C87.6392 113.476 94.811 110.21 100.591 105.343L79.7582 81.7786ZM107.437 97.9298C112.134 91.3559 114.897 83.3062 114.897 74.6111C114.897 54.1321 99.5681 37.2333 79.7582 34.7631V66.6207L107.437 97.9298Z"
          fill="white"
        />
      </motion.svg>

      <motion.svg
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--cursor"
      >
        <circle cx="74" cy="74" r="74" fill="#A041FF" />
        <circle cx="74" cy="74" r="69" stroke="white" strokeWidth="10" />
        <path
          d="M91.8507 46L44 75.8991L71.1386 80.3365L88.1123 102.38L91.8507 46Z"
          stroke="white"
          strokeWidth="10"
        />
      </motion.svg>

      <motion.svg
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--hash"
      >
        <circle cx="74" cy="74" r="74" fill="#FF9141" />
        <circle cx="74" cy="74" r="69" stroke="white" strokeWidth="10" />
        <path d="M46.2551 59.6572H108.807" stroke="white" strokeWidth="10" />
        <path d="M40 88.8135H102.552" stroke="white" strokeWidth="10" />
        <path d="M53.9946 114L70.2563 34" stroke="white" strokeWidth="10" />
        <path d="M78.4854 114L94.747 34" stroke="white" strokeWidth="10" />
      </motion.svg>
    </span>
  );
}

export default MotionSvgs;
