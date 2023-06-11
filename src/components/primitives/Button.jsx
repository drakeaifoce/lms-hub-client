import clsx from "clsx";
import { forwardRef } from "react";

export const Button = forwardRef(
  ({ children, className, onClick, variant, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          className,
          "whitespace-nowrap rounded-lg px-4 py-3 text-sm font-normal shadow-md md:px-9",
          {
            "bg-blue-50 text-white": variant === "primary",
          },
          {
            "border border-black-20 bg-white text-black-70":
              variant === "tertiary",
          },
        )}
      >
        {children}
      </button>
    );
  },
);
