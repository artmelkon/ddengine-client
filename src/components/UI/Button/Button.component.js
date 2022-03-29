import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, isGoogleSignedIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignedIn ? "google-sign-in" : ""} ${classes.button}`}
    {...otherProps}
    type={otherProps.type || 'button'}>
    {children.toUpperCase()}
  </button>
);

export default Button;
