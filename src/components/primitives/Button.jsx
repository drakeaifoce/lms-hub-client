import clsx from "clsx";
import { forwardRef } from "react"

export const Button = forwardRef(({children, className, onClick, variant, ... props}, ref) => {
  return (
    <button
        ref={ref}
        className={clsx( className,
            'whitespace-nowrap px-4 py-3 md:px-9 font-normal text-sm rounded-lg shadow-md',
            {
                "bg-blue text-white" : variant === 'primary'
            },
            {
              "bg-white border border-light-gray text-dark-gray" : variant === "tertiary"
            }
        )}
    >
      {children}
    </button>
  )
}
);
