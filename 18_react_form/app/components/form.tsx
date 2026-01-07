"use client";

import { useState } from "react";

export default function Form() {
  const [testData, setTestData] = useState("");

  function handleTestChange(e) {
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.value);
    setTestData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // qui 'e' non fa riferimento a nessun elemento
    // in particolare. I dati che si vogliono
    // inviare devono essere memorizzati nello stato

    console.log("submit", testData);
  }

  return (
    <>
      <form className="bg-blue-100 p-4" onSubmit={handleSubmit}>
        <label htmlFor="test">Test Input:</label>
        <input
          type="text"
          name="test"
          className="bg-amber-50 p-2 m-2"
          onChange={handleTestChange}
        />
        <button
          type="submit"
          className="bg-blue-800 m-3 p-2 rounded-sm text-amber-300 font-bold"
        >
          Invia
        </button>
      </form>
    </>
  );
}
