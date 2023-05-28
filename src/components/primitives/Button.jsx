import clsx from "clsx";
import { forwardRef } from "react"

export const Button = forwardRef(({children, className, onClick, variant, ... props}, ref) => {
  return (
    <button
        ref={ref}
        className={clsx(
            'whitespace-nowrap py-3 px-9 font-normal text-sm rounded-lg shadow-md',
            {
                "bg-blue text-white" : variant === 'primary'
            },
            {
              "bg-white border border-gray text-dark-gray" : variant === "tertiary"
            }
        )}
    >
      {children}
    </button>
  )
}
);
