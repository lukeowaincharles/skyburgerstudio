import React, { useEffect, useState } from "react";
import { useIntersection } from "react-use";

export const IntersectionContext = React.createContext({ inView: true });

export const IntersectionObserver = ({
  children,
  reset = false, // if value set to true - observed element will reappear every time it shows up on the screen
}) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    } else if (reset) {
      return setInView(false);
    }
  }, [intersection, reset]);

  //
  // Certain paragraphs must not be wrapped in divs, e.g. cols within rows (typically nested paragraphs)
  // console.log(children.type.name)
  //
  // let noDivs = ["ParagraphRelatedPagesGroup"];
  // if (children.type.name && noDivs.indexOf(children.type.name) > -1) {
  //   return (
  //     <IntersectionContext.Provider value={{ inView }}>
  //       {children}
  //     </IntersectionContext.Provider>
  //   );
  // } else {
  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>{children}</div>
    </IntersectionContext.Provider>
  );
  // }
};
