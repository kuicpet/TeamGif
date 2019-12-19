/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React from 'react';


const Button = (props) => {
  console.log(props.style);
  return (
    <button
      className="small"
      type="button"
      style={props.style}
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};


export default Button;
