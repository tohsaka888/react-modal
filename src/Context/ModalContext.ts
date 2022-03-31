import React from "react";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = React.createContext<ModalProps | null>(null);
