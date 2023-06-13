import * as SelectPrimitive from "@radix-ui/react-select";

export const Select = ({ placeholder, list, ...props }) => {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="inline-flex flex-row items-center">
        <SelectPrimitive.Value placeholder={placeholder} />
      </SelectPrimitive.Trigger>
    </SelectPrimitive.Root>
  );
};
