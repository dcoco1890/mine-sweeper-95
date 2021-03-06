import React from "react";

const Button = props => (
  <button className="btn btn-outline-dark" onClick={props.onClick}>
    {props.text}
  </button>
);

export default Button;
