import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { ModalBackground } from "./styles";

function TagModal({ children }) {
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
