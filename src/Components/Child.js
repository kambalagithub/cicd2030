import React, { Children } from "react";

const Child = (props) => {
  return (
    <div>
      <p>{props.children}</p>
      <button onClick={props.IncrementCount}>Click</button>
    </div>
  );
};

export default Child;
