import clsx from "clsx";
import { forwardRef } from "react"

// we use name for input id, 
export const Input = forwardRef(({className, name, type, placeholder, label, ... props}, ref) => {
  return (
    <div className="flex flex-col gap-2">
        <label for={name} className={`text-sm font-normal text-black ${!label && 'hidden'}`}>
            {label}
        </label>
        <input id={name} name={name} type={type} placeholder={placeholder} className="px-4 py-3 border border-solid bg-white border-light-gray rounded-lg text-sm font-normal text-"/>
    </div>
  )
}
);
