import * as SliderPrimitive from "@radix-ui/react-slider";
import clsx from "clsx";
import { useState } from "react";

export const Range = ({ props }) => {
  const [range, setRange] = useState([0, 100000]);

  const handleChange = (newRange) => setRange(newRange);

  return (
    <SliderPrimitive.Root
      value={range}
      onValueChange={handleChange}
      min={0}
      max={100000}
      step={10}
      minStepsBetweenThumbs={1000}
      aria-label="value"
      className="relative flex h-5 w-full touch-none items-center"
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-blue-10">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-blue-50 " />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={clsx(
          "block h-5 w-5 rounded-full bg-blue-50",
          "focus:outline-none focus-visible:ring focus-visible:ring-blue-50 focus-visible:ring-opacity-75"
        )}
      >
        <div className="flex flex-row items-center justify-center">
          <span className="mt-8 text-sm font-normal text-black-80">
            {range[0]}
          </span>
        </div>
      </SliderPrimitive.Thumb>
      <SliderPrimitive.Thumb
        className={clsx(
          "block h-5 w-5 rounded-full bg-blue-50",
          "focus:outline-none focus-visible:ring focus-visible:ring-blue-50 focus-visible:ring-opacity-75"
        )}
      >
        <div className="flex flex-row items-center justify-center">
          <span className="mt-8 text-sm font-normal text-black-80">
            {range[1]}
          </span>
        </div>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
};
