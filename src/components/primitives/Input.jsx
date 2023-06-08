import { forwardRef, useState } from "react"
import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";
import Link from "next/link";
// we use name for input id, 
export const Input = forwardRef(({className, name, type, placeholder, label, ... props}, ref) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="relative flex flex-col gap-2">
        <label for={name} className={`text-sm font-normal text-black ${!label && 'hidden'} ${name === "password" && 'flex flex-row justify-between items-center'}`}>
           <span> {label}</span>
           <Link href='/auth/forgot-password' className={`${!(name === 'password') && 'hidden'} text-blue-50 font-medium text-sm`}>Забыли пароль?</Link>
        </label>
        <input id={name} name={name} type={name === "password" ? (isVisible ? 'text' : 'password') : type} placeholder={placeholder} className="px-4 py-3 border border-solid bg-white border-black-20 rounded-lg text-sm font-normal text-"/>
        {
          name === "password" && (
            <button type="button" onClick={() => setIsVisible(!isVisible)} className="text-black-60 absolute inset-y-0 right-0 flex items-center px-4 top-7">
              {
                isVisible ? <Eye size={14}/> : <EyeOff size={14} />
              }
            </button>
          )
        }
    </div>
  )
}
);
