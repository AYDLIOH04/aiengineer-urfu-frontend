import clsx from "clsx";
import { forwardRef } from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          "min-h-[100px] border-2 border-accent bg-transparent px-4 py-3 outline-orange",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
