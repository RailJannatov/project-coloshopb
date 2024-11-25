import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.age);
  console.log(count);
  

  return <div>Counter</div>;
}

export default Counter;
