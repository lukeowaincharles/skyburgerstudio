import React from 'react';

function ButtonSocial(props) {
  return (
    <React.Fragment>
      <a
        className="btn btn-primary"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    </React.Fragment>
  )
}

export default ButtonSocial;
