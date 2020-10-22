import { useState } from "react";

import { ModalHooks } from "../interfaces/interfaces";

const useModalStatus = (): ModalHooks => {
  const [showModal, updateModal] = useState(false as boolean);

  const setModal = () => {
    updateModal(!showModal);
  };

  return { showModal, setModal };
};

export { useModalStatus };
