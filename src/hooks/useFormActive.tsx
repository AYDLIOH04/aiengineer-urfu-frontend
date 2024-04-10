import { useState } from "react";

export const useFormActive = () => {
  const [isFormActive, setFormActive] = useState(false);

  const onChange = () => {
    if (!isFormActive) {
      setFormActive(true);
    }
  };

  return {
    isFormActive,
    setFormActive,
    onChange,
  };
};
