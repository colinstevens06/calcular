import React from 'react';
import './App.css';
import Calculator from "./components/Calculator"
import Calc from "./components/Calculator-2"

function App() {
  return (
    <div>
      <Calculator />
      <div style={{ marginBottom: "25px" }}></div>
      <Calc />

    </div >
  );
}

export default App;
