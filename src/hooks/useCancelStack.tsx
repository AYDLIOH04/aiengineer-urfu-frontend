import { useState } from "react";

export const useCancelStack = <T,>() => {
  const [cancelStack, setCancelStack] = useState<T[]>([]);

  const pop = () => {
    const removeElement = cancelStack[cancelStack.length - 1];
    setCancelStack((current) => current.slice(0, current.length - 1));
    return removeElement;
  };

  const push = (data: T) => {
    setCancelStack((current) => [...current, data]);
  };

  return {
    cancelStack,
    size: cancelStack.length,
    pop,
    push,
  };
};
