import { useState } from "react";

const useModalStatus = () => {
  const [showModal, updateModal] = useState(false as boolean);

  const setModal = () => {
    updateModal(!showModal);
  };

  return { showModal, setModal };
};

export { useModalStatus };
