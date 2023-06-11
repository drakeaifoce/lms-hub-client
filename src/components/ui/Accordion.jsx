import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { clsx } from "clsx";
import {
  ChevronDown,
  ChevronUp,
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
                "inline-flex w-full items-center justify-between bg-white px-4 py-2 text-left",
              )}
            >
              <span className="text-gray-900 dark:text-gray-100 text-sm font-medium">
                {item.header}
              </span>
              <ChevronDown
                className={clsx(
                  "text-gray-700 dark:text-gray-400 ml-2 h-5 w-5 shrink-0 ease-in-out",
                  "group-radix-state-open:rotate-180 group-radix-state-open:duration-300",
                )}
              />
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
