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

export const Accordion = ({ props }) => {
  return (
    <AccordionPrimitive.Root type="single" className="w-full">
      {items.map((item, i) => {
        return (
          <AccordionPrimitive.AccordionItem
            key={item.id}
            value={item}
            className="px-2 py-3 md:p-6"
          >
            <AccordionPrimitive.AccordionTrigger className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
              <div className="flex w-full flex-row items-center justify-between md:w-fit">
                <h5 className="text-base font-medium text-black-80 md:text-xl">
                  {i + 1 + " " + item.header}
                </h5>
                <ChevronDown
                  size={16}
                  className="inline-block md:hidden md:text-black-100 "
                />
              </div>
              <div className="flex flex-row items-center gap-7">
                <section className="flex flex-row items-center divide-x divide-black-20 text-sm font-normal text-black-60">
                  <div className="flex flex-row items-center gap-2 px-4">
                    <Youtube size={16} />
                    <p className="text-left">
                      {item.lessonsAmount + " уроков"}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2 px-4">
                    <Clock size={16} />
                    <p className="text-left">{item.length}</p>
                  </div>
                </section>
                <ChevronDown
                  size={16}
                  className="hidden md:inline-block md:text-black-100"
                />
              </div>
            </AccordionPrimitive.AccordionTrigger>
            <AccordionPrimitive.AccordionContent className="mt-5 border-t border-solid border-black-15 px-8 py-4 md:py-5">
              <ul className="flex flex-col gap-4 text-sm font-normal text-black-80">
                {item.lessons.map((lesson) => {
                  return (
                    <li key={lesson.id}>
                      <artcile>
                        {lesson.title + ": " + lesson.description}
                      </artcile>
                    </li>
                  );
                })}
              </ul>
            </AccordionPrimitive.AccordionContent>
          </AccordionPrimitive.AccordionItem>
        );
      })}
    </AccordionPrimitive.Root>
  );
};
