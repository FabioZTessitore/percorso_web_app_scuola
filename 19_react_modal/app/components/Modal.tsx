"use client";

export default function Modal({ action }) {
  return (
    <div className="bg-blue-100 fixed top-50/100 left-50/100 -translate-50/100 w-sm text-center p-4">
      <p className="mb-3">Modal here</p>
      <button
        onClick={action}
        className="bg-red-600 text-amber-50 px-3 py-1 font-bold"
      >
        Chiudi
      </button>
    </div>
  );
}
