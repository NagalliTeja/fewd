// import './App.css'
import React from 'react';
import { useState, useMemo, useContext } from 'react';
import { MyContext } from './index.js';
function App1() {
  let result = useContext(MyContext);
  const expensiveCalculation = useMemo(() => {
    for (let i = 0; i < 10000; i++) {
      result += 1;
    }
    return result;
  }, []);
  return (
    <div>
      <p>Expensive Calculation: {expensiveCalculation}</p>
    </div>
  );
}
export default App1;