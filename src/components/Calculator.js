import React from "react";
import Wrapper from "./Wrapper";
import Button from "./Button";
import Output from "./Output"

class Calculator extends React.Component {

  state = {
    value: "",
    useNumber: null,
    carryOverNumber: null,
    useOperator: null,
    answer: null,
  }

  appendNumber = (event) => {
    event.preventDefault();
    let newValue = this.state.value + event.target.value;
    this.setState({
      value: newValue
    })
  }

  operatorClick = (event) => {
    event.preventDefault();
    // capture the value, parseInt and set it to carryOverNumber
    let useNumber = parseInt(this.state.value)
    let useOperator = event.target.value

    if (this.state.carryOverNumber !== null) {
      this.doMath()
      this.setState({
        value: ""
      })
    } else {
      this.setState({
        value: "",
        useNumber: useNumber,
        useOperator: useOperator,
        carryOverNumber: useNumber
      })

    }
    console.log(this.state)

  }

  equalClick = (event) => {
    event.preventDefault();
    this.doMath()
    this.setState({
      value: this.state.answer
    })
  }

  doMath() {
    // do math
    let mathValue;
    let carryOverNumber = parseInt(this.state.carryOverNumber)
    let useNumber = parseInt(this.state.value)
    let useOperator = this.state.useOperator
    // Assign value based on the operator
    switch (this.state.useOperator) {
      case "+":
        mathValue = carryOverNumber + useNumber;
        break;
      case "-":
        mathValue = carryOverNumber - useNumber;
        break;
      case "x":
        mathValue = carryOverNumber * useNumber;
        break;
      case "/":
        mathValue = carryOverNumber / useNumber;
        break;
      default:
        mathValue = NaN;
    }
    console.log(mathValue)
    this.setState({
      carryOverNumber: mathValue,
      useNumber: useNumber,
      useOperator: useOperator,
      answer: mathValue,
    })
  }

  render() {
    return (
      <Wrapper>
        <Output>{this.state.value}</Output>
        <Button className="button button-other">AC</Button>
        <Button className="button button-other">+/-</Button>
        <Button className="button button-other">%</Button>
        <Button className="button button-operator" value="/" onClick={this.operatorClick}>/</Button>
        <Button className="button button-number" value="7" onClick={this.appendNumber}>7</Button>
        <Button className="button button-number" value="8" onClick={this.appendNumber}>8</Button>
        <Button className="button button-number" value="9" onClick={this.appendNumber}>9</Button>
        <Button className="button button-operator" value="x" onClick={this.operatorClick}>x</Button>
        <Button className="button button-number" value="4" onClick={this.appendNumber}>4</Button>
        <Button className="button button-number" value="5" onClick={this.appendNumber}>5</Button>
        <Button className="button button-number" value="6" onClick={this.appendNumber}>6</Button>
        <Button className="button button-operator" value="-" onClick={this.operatorClick}>-</Button>
        <Button className="button button-number" value="1" onClick={this.appendNumber}>1</Button>
        <Button className="button button-number" value="2" onClick={this.appendNumber}>2</Button>
        <Button className="button button-number" value="3" onClick={this.appendNumber}>3</Button>
        <Button className="button button-operator" value="+" onClick={this.operatorClick}>+</Button>
        <Button className="button button-number button-zero" value="0" onClick={this.appendNumber}>0</Button>
        <Button className="button button-number">.</Button>
        <Button className="button button-operator" onClick={this.equalClick}>=</Button>

      </Wrapper>
    )
  }
}

export default Calculator;