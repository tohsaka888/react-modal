import React from "react";
import styled from "styled-components";
import ModalAnimation from "../spring/ModalAnimation";

const ModalContainer = styled.div`
  border: 1px solid #666666;
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

function Modal() {
  return (
    <ModalAnimation>
      <ModalContainer>Modal</ModalContainer>
    </ModalAnimation>
  );
}

export default Modal;
