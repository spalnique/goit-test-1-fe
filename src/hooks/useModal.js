import { useState } from 'react';

const useModal = (initialValue) => {
  const [modal, setModal] = useState(initialValue);

  const open = (camper) =>
    setModal((prev) => ({
      ...prev,
      visible: true,
      camper,
    }));

  const close = () =>
    setModal((prev) => ({ ...prev, visible: false, camper: null }));

  return { modal, open, close };
};

export default useModal;
