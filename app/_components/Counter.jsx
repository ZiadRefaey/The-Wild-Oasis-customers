"use client";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
      <div>{counter}</div>
      <button onClick={(c) => setCounter((c) => c + 1)}>+</button>
    </>
  );
}
