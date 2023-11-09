import React, { useState } from 'react';
import Button from '../button/button';
import '../calculator/calculator.css'

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [operand1, setOperand1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleButtonClick = (label) => {
    if (label === 'C') {
      clearDisplay();
    } else if (!isNaN(label)) {
      inputDigit(label);
    } else if (label === '.') {
      inputDecimal();
    } else if (label === '+/-') {
      toggleSign();
    } else {
      handleOperator(label);
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setOperand1(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const toggleSign = () => {
    setDisplay(display.charAt(0) === '-' ? display.slice(1) : '-' + display);
  };

  const handleOperator = (nextOperator) => {
    const nextOperand = parseFloat(display);

    if (operand1 == null) {
      setOperand1(nextOperand);
      setWaitingForOperand(true);
      setOperator(nextOperator);
    } else {
      const result = performOperation(operand1, nextOperand, operator);

      setDisplay(String(result));
      setOperand1(result);
      setWaitingForOperand(true);
      setOperator(nextOperator);
    }
  };

  const performOperation = (operand1, operand2, operator) => {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        return operand2;
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        
          <Button label="C" onClick={handleButtonClick} />
          <Button label="+/-" onClick={handleButtonClick} />
          <Button label="%" onClick={handleButtonClick} />
          <Button label="/" onClick={handleButtonClick} />
        
        
          <Button label="7" onClick={handleButtonClick} />
          <Button label="8" onClick={handleButtonClick} />
          <Button label="9" onClick={handleButtonClick} />
          <Button label="*" onClick={handleButtonClick} />
        
        
          <Button label="4" onClick={handleButtonClick} />
          <Button label="5" onClick={handleButtonClick} />
          <Button label="6" onClick={handleButtonClick} />
          <Button label="-" onClick={handleButtonClick} />
        
        
          <Button label="1" onClick={handleButtonClick} />
          <Button label="2" onClick={handleButtonClick} />
          <Button label="3" onClick={handleButtonClick} />
          <Button label="+" onClick={handleButtonClick} />
        
        
          <Button label="0" onClick={handleButtonClick} />
          <Button label="." onClick={handleButtonClick} />
          <Button label="=" onClick={handleButtonClick} />
        
      </div>
    </div>
  );
}

export default Calculator;
