import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return { isOpen, toggle, setIsOpen };
};

export default useToggle;