"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

export default function Home() {
  const [aperto, setAperto] = useState(false);

  function showModal() {
    console.log("apri modale");
    setAperto(true);
  }

  function hideModal() {
    setAperto(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main
        className={`flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  dark:bg-black sm:items-start ${
          aperto ? "bg-gray-500" : "bg-white"
        }`}
      >
        {/* pulsante per attivare il modale */}
        <button onClick={showModal}>Apri modale</button>

        {aperto && createPortal(<Modal action={hideModal} />, document.body)}
      </main>
    </div>
  );
}
