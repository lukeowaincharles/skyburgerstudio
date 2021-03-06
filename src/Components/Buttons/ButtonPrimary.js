import React from 'react';
import { Link } from 'react-scroll';

function ButtonPrimary(props) {
  return (
    <React.Fragment>
      <Link
        className={`${"btn btn-primary"} ${props.classes}`}
        id={props.id}
        to={props.link}
        href={props.link}
        smooth={true}
        duration={800}
        offset={0}
      >
        {props.title}
      </Link>
    </React.Fragment>
  )
}

export default ButtonPrimary;
