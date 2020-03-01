import React from "react";
import "./style.css";

function Output(props) {
  return (
    <div className="output">{props.children}</div>
  )
}

export default Output;