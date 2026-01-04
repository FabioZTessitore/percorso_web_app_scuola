"use client";

import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="p-4 text-xl bg-gray-800 flex rounded-lg">
      <Button action={decrement} text="-" />
      <span className="text-xl flex justify-center w-50 items-center text-gray-200">
        {counter}
      </span>
      <Button action={increment} text="+" />
    </div>
  );
}
