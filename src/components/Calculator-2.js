import React from "react";
import Wrapper from "./Wrapper";
import Button from "./Button";
import Output from "./Output"
import calculator from "../calculator.json"

class Calc extends React.Component {

  state = {
    value: "",
    previousNumber: null,
    previousOperator: "",
    currentOperator: null,
    answer: null,
    calculator: calculator,
  }

  appendNumber = (number) => {
    // event.preventDefault();
    let newValue = this.state.value + number;
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

    console.log("State Cleared")
    console.log(this.state)

  }

  operatorClick = (operator) => {
    if (this.state.previousOperator !== "") {
      this.doMath()
      this.setState({
        previousOperator: operator
      })
      return
    }

    // clicks the operation
    // get the value of the number and put it in a previousNumber state
    let number = this.state.value

    // get the value of the operator and put that in the previousOperator state
    let operationValue = operator;

    // clear out what it says on the calculator
    this.setState({
      previousNumber: number,
      previousOperator: operationValue,
      value: "",
      answer: null
    })
    console.log(this.state)
  }

  doMath = () => {
    if (typeof parseInt(this.state.value) === isNaN) return
    let answer = null;
    let operator = this.state.previousOperator;
    let previousNumber = parseFloat(this.state.previousNumber)
    let currentNumber = this.state.value

    if (operator === "x" && currentNumber.charAt(0) === "-") {
      return
    } else {
      currentNumber = parseFloat(currentNumber)
    }

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

    this.setState({
      answer: answer,
      previousOperator: "",
      value: "",
      previousNumber: answer,
    })

    console.log(this.state)
  }

  handleClick = (event) => {
    event.preventDefault()
    // if (this.data-click === "clear");
    let thisButton = event.target.className;
    let value = event.target.value
    switch (thisButton) {
      case "button button-operator": this.operatorClick(value);
        break;
      case "button button-number": this.appendNumber(value);
        break;
      case "button button-other button-pos-neg": this.positiveNegative();
        break;
      case "button button-number button-50": this.appendNumber(value);
        break;
      case "button button-operator button-equal": this.doMath();
        break;

      default:
        this.clear();

    }
  }

  positiveNegative = () => {
    let number = this.state.value
    if (number.charAt(0) !== "-") {
      number = "-" + number;
    } else {
      number = number.slice(1)
    }

    this.setState({
      value: number
    })
  }

  render() {
    return (
      <Wrapper>
        <Output>{this.state.answer}</Output>
        <Output>{this.state.value}</Output>

        {this.state.calculator.map(button => (
          <Button
            className={button.className}
            // onClick={eval(button.click)}
            onClick={this.handleClick}
            value={button.value}
            key={button.value}
          >
            {console.log(button.click)}
            {button.value}
          </Button>
        )

        )
        }


      </Wrapper>
    )
  }
}

export default Calc;