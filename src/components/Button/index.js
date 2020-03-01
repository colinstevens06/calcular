import React from "react";
import "./style.css"

function Button(props) {
  return <button className={props.className} value={props.value} onClick={props.onClick}>{props.children}</button>
}

export default Button;