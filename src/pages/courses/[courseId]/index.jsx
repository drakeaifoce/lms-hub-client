import {
  Calendar,
  Clock,
  Lock,
} from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/primitives/Button";
import { Accordion } from "@/components/ui/Accordion";

export default function Course() {
  return (
    <Layout>
      <div className="container mx-auto md:grid md:grid-cols-2 md:items-center">
        <div className="my-10 flex w-full  flex-col gap-8 px-4 md:my-16 md:gap-10 md:py-4">
          <nav className="flex flex-row gap-2">
            <Link href="/" className="text-sm font-medium text-black-40">
              Главная
            </Link>
            <span className="text-sm font-medium text-black-20">/</span>
            <Link
              href="/courses/1"
              className="text-sm font-medium text-black-70"
            >
              StartUp School
            </Link>
          </nav>
          <div className="flex flex-col gap-8">
            <section className="flex flex-col gap-7">
              <h1 className="text-2xl font-medium text-black-100 md:text-4xl md:font-semibold">
                StartUp School
              </h1>
              <Image
                src="/course-card-filler.png"
                width={344}
                height={200}
                alt="Course name"
                className="w-full md:hidden"
              />
              <div className="flex flex-row gap-4">
                <Image
                  src="/temp-avatar.png"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-medium text-black-80">
                    Имя Фамилия
                  </h3>
                  <p className="text-sm font-normal text-black-50">
                    Автор курса
                  </p>
                </div>
              </div>
              <article className="text-sm font-normal text-black-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </article>
            </section>
            <section className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex flex-row gap-2 text-sm font-normal text-black-60">
                <Clock size={16} />
                <span>3 недели</span>
              </div>
              <span className="hidden text-sm font-normal text-black-20 md:block">
                |
              </span>
              <div className="flex flex-row gap-2 text-sm font-normal text-black-60">
                <Calendar size={16} />
                <span>Старт 1 июня 2023</span>
              </div>
              <span className="hidden text-sm font-normal text-black-20 md:block">
                |
              </span>
              <div className="flex">
                <span className="rounded-md bg-green-10 px-1 py-1 text-center text-xs font-normal text-green-70">
                  идет набор
                </span>
              </div>
            </section>
            <section>
              <span className="text-2xl font-medium text-black-80">
                45 000 ₸
              </span>
            </section>
            <section>
              <Button
                variant="primary"
                type="button"
                className="w-full md:w-fit"
              >
                Начать обучение
              </Button>
            </section>
          </div>
        </div>
        <Image
          src="/course-card-filler.png"
          width={710}
          height={754}
          alt="Course name"
          className="hidden object-fill md:block"
        />
      </div>
      <div className="bg-black-5 ">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-10 px-4 py-16">
            <section className="flex flex-col gap-4">
              <h2 className="text-left text-3xl font-medium text-black-100 md:text-center">
                Подробнее о курсе
              </h2>
              <p className="text-left text-sm font-normal text-black-80 md:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus.
              </p>
            </section>
            <iframe
              width="846"
              height="480"
              src="https://www.youtube.com/embed/NiknNI_0J48"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto">
          <div className="px-4 py-10 md:py-16">
            <section className="flex flex-row items-center justify-center gap-4 rounded-lg border border-solid border-black-20 px-6 py-5 text-base font-medium text-black-50">
              <Lock size={20} />
              <p>Зарегистрируйтесь, чтобы посмотреть силлабус</p>
            </section>
            {/* According to auth */}
            <section className="flex flex-col gap-12">
              <h2 className="text-left text-2xl font-medium text-black-100 md:text-center md:text-3xl">
                Чему вы научитесь?
              </h2>
              <Accordion />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
