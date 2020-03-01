import React from "react";
import "./style.css"

function Button(props) {
  return <button className={props.className}>{props.children}</button>
}

export default Button;