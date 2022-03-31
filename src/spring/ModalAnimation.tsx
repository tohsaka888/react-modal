import React, { useContext } from "react";
import { animated, useSpring } from "react-spring";
import { CSSProperties } from "styled-components";
import { ModalContext } from "../Context/ModalContext";
import "./modal-animation.css";

type Props = {
  children: React.ReactNode;
};

function ModalAnimation({ children }: Props) {
  const modalProps = useContext(ModalContext);
  const inStyles = useSpring<CSSProperties>({
    from: {
      opacity: 0,
      transform: "scale(1.1)",
    },
    to: async (next, cancel) => {
      if (modalProps?.isOpen) {
        await next({
          transform: "scale(1.1)",
          config: {
            duration: 100,
          },
        });
      }
      await next({
        opacity: modalProps?.isOpen ? 1 : 0,
        transform: modalProps?.isOpen ? "scale(1)" : "scale(0)",
      });
    },
  });

  const outStyles = useSpring<CSSProperties>({
    opacity: modalProps?.isOpen ? 1 : 0,
    transform: modalProps?.isOpen ? "scale(1)" : "scale(0.5)",
  });
  return (
    <animated.div
      style={modalProps?.isOpen ? inStyles : outStyles}
      className="test"
    >
      {children}
    </animated.div>
  );
}

export default ModalAnimation;
