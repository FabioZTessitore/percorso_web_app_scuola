"use client";

import { EventHandler, ReactEventHandler } from "react";

export default function Button({ text, action }) {
  return (
    <button
      onClick={action}
      className="bg-blue-500 px-4 py-1 rounded-sm text-gray-200 hover:bg-pink-500"
    >
      {text}
    </button>
  );
}
