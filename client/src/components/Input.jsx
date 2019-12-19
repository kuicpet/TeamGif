/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';


const Input = (props) => (
  <div className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className="form-input px-2 small"
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      {...props}
    />
  </div>
);
export default Input;
