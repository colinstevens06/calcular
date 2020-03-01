import React from "react";
import Wrapper from "./Wrapper";
import Button from "./Button";
import Output from "./Output"

class Calculator extends React.Component {

  render() {
    return (
      <Wrapper>
        {/* <h1>Calculator</h1> */}


        <Output>55</Output>
        <Button className="button button-other">AC</Button>
        <Button className="button button-other">+/-</Button>
        <Button className="button button-other">%</Button>
        <Button className="button button-operator">/</Button>
        <Button className="button button-number">7</Button>
        <Button className="button button-number">8</Button>
        <Button className="button button-number">9</Button>
        <Button className="button button-operator">x</Button>
        <Button className="button button-number">4</Button>
        <Button className="button button-number">5</Button>
        <Button className="button button-number">6</Button>
        <Button className="button button-operator">-</Button>
        <Button className="button button-number">1</Button>
        <Button className="button button-number">2</Button>
        <Button className="button button-number">3</Button>
        <Button className="button button-operator">+</Button>
        <Button className="button button-number button-zero">0</Button>
        <Button className="button button-number">.</Button>
        <Button className="button button-operator">=</Button>

      </Wrapper>
    )
  }
}

export default Calculator;