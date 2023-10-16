import React, {useEffect, useState} from "react";

function CountUseStateDemo() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1); // 1
    setCount(count + 1); // 2
    console.log('count value', count); // 0
  }
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default CountUseStateDemo;