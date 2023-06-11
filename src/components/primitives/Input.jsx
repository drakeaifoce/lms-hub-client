import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";
import Link from "next/link";
import { forwardRef, useState } from "react";
// we use name for input id,
export const Input = forwardRef(
  ({ className, name, type, placeholder, label, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <div className="relative flex flex-col gap-2">
        <label
          htmlFor={name}
          className={`text-black text-sm font-normal ${!label && "hidden"} ${
            name === "password" && "flex flex-row items-center justify-between"
          }`}
        >
          <span> {label}</span>
          <Link
            href="/auth/forgot-password"
            className={`${
              name !== "password" && "hidden"
            } text-sm font-medium text-blue-50`}
          >
            Забыли пароль?
          </Link>
        </label>
        <input
          id={name}
          name={name}
          type={name === "password" ? (isVisible ? "text" : "password") : type}
          placeholder={placeholder}
          className="text- rounded-lg border border-solid border-black-20 bg-white px-4 py-3 text-sm font-normal"
        />
        {name === "password" && (
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute inset-y-0 right-0 top-7 flex items-center px-4 text-black-60"
          >
            {isVisible ? <Eye size={14} /> : <EyeOff size={14} />}
          </button>
        )}
      </div>
    );
  },
);
