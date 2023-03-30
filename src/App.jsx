import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  }

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  }

  const handleAddition = () => {
    setResult(`Result: ${num1 + num2}`);
  }

  const handleSubtraction = () => {
    setResult(`Result: ${num1 - num2}`);
  }

  const handleMultiplication = () => {
    setResult(`Result: ${num1 * num2}`);
  }

  const handleDivision = () => {
    setResult(`Result: ${num1 / num2}`);
  }

  return (
    <div className="container">
      <h1>Basic Calculator</h1>
      <div className="form-group">
        <label htmlFor="num1">Number 1:</label>
        <input type="number" id="num1" value={num1} onChange={handleNum1Change} />
      </div>
      <div className="form-group">
        <label htmlFor="num2">Number 2:</label>
        <input type="number" id="num2" value={num2} onChange={handleNum2Change} />
      </div>
      <div className="button-group">
        <button onClick={handleAddition}>Addition</button>
        <button onClick={handleSubtraction}>Subtraction</button>
        <button onClick={handleMultiplication}>Multiplication</button>
        <button onClick={handleDivision}>Division</button>
      </div>
      <p id="result">{result}</p>
    </div>
  );
}

export default App;
