import React, { useState, useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const inputref = useRef();
  const [count, setCount] = useState(30);
  const IncrementCount = () => {
    setCount(count + 1);
  };
  const focusInput = () => {
    inputref.current.focus();
  };
  return (
    <div>
      <p>{count}</p>
      <input type="text" ref={inputref} />
      <button onClick={focusInput}>Click</button>
      <Child count={count} IncrementCount={IncrementCount}>
        <p>This is childerns </p>
      </Child>
    </div>
  );
};

export default Parent;
