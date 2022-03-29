import React from "react";

const FormInput = ({ handleChange, ...otherProps }) => {
  return (
  <input onChange={handleChange} {...otherProps} />
)};

export default FormInput;
