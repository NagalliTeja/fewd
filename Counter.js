import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handleClick1(){
    setCount(count - 1);
  }
  return (
    <div>
      <p>Count is {count} .</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClick1}>Decrement</button>
    </div>
  );
}

export default Counter;