import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  handler: Handler,
  ref: RefObject<T>,
  isOpen: boolean
): void {
  useEffect(() => {
    const handleEvent = (event: MouseEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleEvent);

      return () => {
        document.removeEventListener('mousedown', handleEvent);
      };
    }
  }, [handler, ref, isOpen]);
}
