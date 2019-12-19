/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';


const Select = (props) => (
  <div className="form-group small">
    <label htmlFor={props.name}>{props.title}</label>
    <select
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
    >

      <option value="" disabled>{props.placeholder}</option>
      {props.options.map((option) => (
        <option
          key={option}
          value={option}
          label={option}
        >
          {option}
        </option>
      ))}
    </select>

  </div>
);

export default Select;
