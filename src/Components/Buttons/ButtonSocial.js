import React from 'react';
import { Event } from "../Tracking";

function ButtonSocial(props) {
  return (
    <React.Fragment>
      <a
        className="btn btn-primary"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          Event("Social", `${props.link}`, `${props.title}`)
        }}
      >
        {props.title}
      </a>
    </React.Fragment>
  )
}

export default ButtonSocial;
