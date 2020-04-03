import React from 'react';
import { Link } from 'react-scroll';

function ButtonPrimary(props) {
  return (
    <React.Fragment>
      <Link
        className="btn btn-primary"
        to={props.link}
        href={props.link}
        smooth={true}
        duration={800}
        offset={-100}
      >
        {props.title}
      </Link>
    </React.Fragment>
  )
}

export default ButtonPrimary;
