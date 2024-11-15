import { useState } from "react";

export const useSizeGuideModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSizeGuideModal = () => {
    setIsOpen(true);
  };

  const closeSizeGuideModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openSizeGuideModal,
    closeSizeGuideModal,
  };
};
