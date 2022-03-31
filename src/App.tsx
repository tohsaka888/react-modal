import React, { useState } from "react";
import "./App.css";
import { ModalContext } from "./Context/ModalContext";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="App">
        <Modal />
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          click me
        </button>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
