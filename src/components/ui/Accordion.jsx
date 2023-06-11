import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { clsx } from "clsx";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Youtube,
} from "feather-icons-react/build/IconComponents";

const items = [
  {
    id: 1,
    header: "Введение",
    lessonsAmount: 5,
    length: "56 минут 11 сек",
    lessons: [
      {
        id: 1,
        title: "Урок 1",
        description: "Lorem ipsum dolor sit amet",
      },
      {
        id: 2,
        title: "Урок 1",
        description: "Lorem ipsum dolor sit amet",
      },
      {
        id: 3,
        title: "Урок 1",
        description: "Lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    id: 2,
    header: "Введение",
    lessonsAmount: 5,
    length: "56 минут 11 сек",
    lessons: [
      {
        id: 1,
        title: "Урок 1",
        description: "Lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    id: 3,
    header: "Введение",
    lessonsAmount: 5,
    length: "56 минут 11 сек",
    lessons: [
      {
        id: 1,
        title: "Урок 1",
        description: "Lorem ipsum dolor sit amet",
      },
      {
        id: 2,
        title: "Урок 1",
        description: "Lorem ipsum dolor sit amet",
      },
    ],
  },
];

export const Accordion = () => {
  return (
    <AccordionPrimitive.Root type="single" className={clsx("w-full space-y-4")}>
      {items.map((item, i) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className="w-full focus:outline-none"
        >
          <AccordionPrimitive.Header className="w-full">
            <AccordionPrimitive.Trigger
              className={clsx(
                "group",
                "focus:outline-none",
                "inline-flex w-full flex-row items-start justify-between bg-white px-4 py-2 text-left md:items-center",
              )}
            >
              <span className="w-2/3 text-base font-medium text-black-80 md:w-fit md:text-xl">
                {i + 1 + ". " + item.header}
              </span>
              <div className="hidden md:flex md:flex-row">
                <div className="flex flex-row items-center divide-x divide-black-20 text-black-60">
                  <div className="flex flex-row items-center gap-1 px-4">
                    <Youtube size={16} />
                    <span>{item.lessonsAmount + " уроков"}</span>
                  </div>
                  <div className="flex flex-row items-center gap-1 px-4">
                    <Clock size={16} />
                    <span>{item.length}</span>
                  </div>
                </div>
              </div>
              <span className="flex w-1/3 flex-row items-center justify-end md:w-fit">
                <ChevronDown
                  className={clsx(
                    "shrink-0 text-black-100 ease-in-out",
                    "group-radix-state-open:rotate-180 group-radix-state-open:duration-300",
                  )}
                />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="dark:bg-gray-800 w-full rounded-b-lg bg-white px-4 pb-3 pt-1">
            <div className="text-gray-700 dark:text-gray-400 text-sm">
              {item.lessonsAmount}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};
