import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { ModalBackground } from "./styles";

/*Existence of null for modalRoot has been described in "The Billion Dollar Mistake". One way to fix this is to ensure that the values are never null or undefined, for example by verifying them up front*/

function TagModal({ children, onSaveTag }) {
  const elRef: any = useRef(null);
  if (!elRef.current) {
    const div: HTMLElement = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    let modalRoot;
    if (document.getElementById("modal") !== null) {
      modalRoot = document.getElementById("modal");
    }
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <ModalBackground>{children}</ModalBackground>,
    elRef.current
  );
}

export default TagModal;
