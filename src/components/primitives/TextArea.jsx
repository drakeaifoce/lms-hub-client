export const TextArea = ({name, placeholder, ...props}) => {
  return (
    <textarea name={name} className="border border-black-20 w-full rounded-lg h-40 py-2 px-4" placeholder={placeholder} type="text"/>
  )
}
