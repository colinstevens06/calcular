import React from "react";
import Wrapper from "./Wrapper";
import Button from "./Button";
import Output from "./Output"

class Calc extends React.Component {

  state = {
    value: "",
    previousNumber: null,
    previousOperator: "",
    currentOperator: null,
    answer: null,
  }

  appendNumber = (event) => {
    event.preventDefault();
    let newValue = this.state.value + event.target.value;
    this.setState({
      value: newValue,
      currentNumber: newValue,
    })
    console.log("Number Click")
    console.log(this.state)
  }

  clear = () => {
    this.setState({
      value: "",
      previousNumber: null,
      previousOperator: "",
      currentOperator: null,
      answer: null,
    })

  }

  operatorClick = (event) => {
    if (this.state.previousOperator !== "") {
      this.doMath()
      let operationValue = event.target.value;
      this.setState({
        previousOperator: operationValue
      })


      return
    }

    // clicks the operation
    // get the value of the number and put it in a previousNumber state
    let number = this.state.value

    // get the value of the operator and put that in the previousOperator state
    let operationValue = event.target.value;

    // clear out what it says on the calculator

    this.setState({
      previousNumber: number,
      previousOperator: operationValue,
      value: ""
    })
    console.log(this.state)
  }

  doMath = () => {
    if (typeof parseInt(this.state.value) === isNaN) return
    let answer = null;
    let operator = this.state.previousOperator;
    let previousNumber = parseInt(this.state.previousNumber)
    let currentNumber = parseInt(this.state.value)

    switch (operator) {
      case "+":
        answer = previousNumber + currentNumber;
        break;
      case "-":
        answer = previousNumber - currentNumber;
        break;
      case "x":
        answer = previousNumber * currentNumber;
        break;
      case "/":
        answer = previousNumber / currentNumber;
        break;
      default:
        answer = NaN;
    }
    console.log(answer)
    console.log("This.state.answer: " + this.state.answer)

    this.setState({
      answer: answer,
      previousOperator: null,
      value: "",
      previousNumber: answer,
    })
    console.log("After math state. Answer should be updated, but it's not showing as updated")
    console.log("This.state.answer later on: " + this.state.answer)

    console.log(this.state)
  }

  updateDisplay() {

  }

  render() {
    return (
      <Wrapper>
        <Output>{this.state.answer}</Output>
        <Output>{this.state.value}</Output>
        <Button className="button button-other" onClick={this.clear}>AC</Button>
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
        <Button className="button button-operator" onClick={this.doMath}>=</Button>

      </Wrapper>
    )
  }
}

export default Calc;