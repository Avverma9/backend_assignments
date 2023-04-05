import React, { useState } from 'react';
import './App.css';
function App() {
  const [inputValue, setInputValue] = useState('');
  const [showTable, setShowTable] = useState(false);
 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setShowTable(true);
  };

  const generateTable = (num) => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(
        <div className="table-row" key={i}>
          <div className="table-cell">{`${num * i}`}</div>
        </div>
      );
    }
    return <div className="table">{rows}</div>;
  };

  return (

    <div className="container">
      <h1>Table Generator</h1>
      <div className="input-container">
        <label>Enter a number:</label>
        <input type="number" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Generate Table</button>
      </div>
      {showTable && inputValue ? generateTable(inputValue) : null}
    </div>

  );
}

export default App;
