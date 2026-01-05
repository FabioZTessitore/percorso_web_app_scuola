"use client";

import { useState } from "react";
import Button from "./Button";
import Flag from "./Flag";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function showFlag() {
    return counter >= 10;
  }

  function warning() {
    return counter < 0;
  }

  return (
    <div className="flex items-center">
      <div
        className={`p-4 text-xl flex rounded-lg items-center ${
          warning() ? "bg-red-500" : "bg-gray-800"
        }`}
      >
        <Button action={decrement} text="-" />
        <span className="text-xl flex justify-center w-50 items-center text-gray-200">
          {counter}
        </span>
        <Button action={increment} text="+" />
      </div>
      {showFlag() && <Flag />}
    </div>
  );
}
