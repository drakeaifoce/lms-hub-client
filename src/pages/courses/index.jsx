import {
  ChevronLeft,
  ChevronRight,
  Clock,
} from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/primitives/Button";
import { Range } from "../../components/ui/Range";

export default function AllCourses() {
  return (
    <Layout>
      <div className="md:mt-15 container mx-auto py-10 md:mb-14">
        <div className="flex flex-col gap-10 px-4 md:gap-8">
          <h1 className="text-center text-2xl font-medium text-black-100 md:text-3xl">
            Курсы
          </h1>
          <div className="flex flex-col gap-6 md:gap-7">
            <nav className="flex flex-row items-center justify-between">
              <div>Tabs</div>
              <div className="md:hidden">Filters mobile</div>
            </nav>
            <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="col-span-1 hidden rounded-lg border border-solid border-black-20 md:block">
                <div className="m-6 flex flex-col gap-12">
                  <section className="flex flex-col gap-4 border-b border-solid border-black-15">
                    <h4 className="text-base font-medium text-black-100">
                      Профессии
                    </h4>
                    <section className="mb-2 flex flex-col gap-2">
                      <div className="mb-4 flex flex-row items-center">
                        <input
                          id="profesion"
                          type="checkbox"
                          className="h-4 w-4 rounded border border-black-20 bg-white text-blue-50 focus:ring-1"
                        />
                        <label
                          htmlFor="profesion"
                          className="text-black ml-2 text-sm font-normal"
                        >
                          Frontend разработчик
                        </label>
                      </div>
                    </section>
                  </section>
                  <section className="flex flex-col gap-4 border-b border-solid border-black-15">
                    <h4 className="text-base font-medium text-black-100">
                      IT школы
                    </h4>
                    <section className="mb-2 flex flex-col gap-2">
                      <div className="mb-4 flex flex-row items-center">
                        <input
                          id="school"
                          type="checkbox"
                          className="h-4 w-4 rounded border border-black-20 bg-white text-blue-50 focus:ring-1"
                        />
                        <label
                          htmlFor="school"
                          className="text-black ml-2 text-sm font-normal"
                        >
                          nFactorial
                        </label>
                      </div>
                    </section>
                  </section>
                  <section className="flex flex-col gap-4 border-b border-solid border-black-15">
                    <h4 className="text-base font-medium text-black-100">
                      Длительность
                    </h4>
                    <section className="mb-2 flex flex-col gap-2">
                      <div className="mb-4 flex flex-row items-center">
                        <input
                          id="Length"
                          type="checkbox"
                          className="h-4 w-4 rounded border border-black-20 bg-white text-blue-50 focus:ring-1"
                        />
                        <label
                          htmlFor="Length"
                          className="text-black ml-2 text-sm font-normal"
                        >
                          Меньше месяца
                        </label>
                      </div>
                    </section>
                  </section>
                  <section className="flex flex-col gap-4">
                    <h4 className="text-base font-medium text-black-100">
                      Цена
                    </h4>
                    <Range />
                  </section>
                </div>
              </div>
              <div className="col-span-2 grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2">
                <Link
                  href="/courses/1"
                  className="mx-4 rounded-lg border border-black-20 bg-white"
                >
                  <div className="flex flex-col gap-4 p-4">
                    <Image
                      width={381}
                      height={141}
                      className="w-full"
                      alt="Course photo"
                      src="/course-card-filler.png"
                    />
                    <section className="flex flex-col items-start gap-2">
                      <div className="flex flex-row items-center gap-3 text-left">
                        <h3 className="text-black text-sm font-medium">
                          StartUp School
                        </h3>
                        <span className="whitespace-nowrap rounded-md bg-green-10 px-1 py-1 text-xs font-normal  text-green-70">
                          идет набор
                        </span>
                      </div>
                      <p className="w-full text-sm font-normal text-black-60 md:w-3/4">
                        Курс по основам IT-предпринимательства для стартаперов,
                        будущих продакт-менеджеров, школьников и студентов.
                      </p>
                    </section>
                    <section className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-2 text-sm font-normal text-black-60">
                        <Clock size={16} />
                        <span>3 недели</span>
                      </div>
                      <span className="text-base font-medium text-black-100">
                        45 000 ₸
                      </span>
                    </section>
                  </div>
                </Link>
                <Link
                  href="/courses/1"
                  className="mx-4 rounded-lg border border-black-20 bg-white"
                >
                  <div className="flex flex-col gap-4 p-4">
                    <Image
                      width={381}
                      height={141}
                      className="w-full"
                      alt="Course photo"
                      src="/course-card-filler.png"
                    />
                    <section className="flex flex-col items-start gap-2">
                      <div className="flex flex-row items-center gap-3 text-left">
                        <h3 className="text-black text-sm font-medium">
                          StartUp School
                        </h3>
                        <span className="whitespace-nowrap rounded-md bg-green-10 px-1 py-1 text-xs font-normal  text-green-70">
                          идет набор
                        </span>
                      </div>
                      <p className="w-full text-sm font-normal text-black-60 md:w-3/4">
                        Курс по основам IT-предпринимательства для стартаперов,
                        будущих продакт-менеджеров, школьников и студентов.
                      </p>
                    </section>
                    <section className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-2 text-sm font-normal text-black-60">
                        <Clock size={16} />
                        <span>3 недели</span>
                      </div>
                      <span className="text-base font-medium text-black-100">
                        45 000 ₸
                      </span>
                    </section>
                  </div>
                </Link>
                <Link
                  href="/courses/1"
                  className="mx-4 rounded-lg border border-black-20 bg-white"
                >
                  <div className="flex flex-col gap-4 p-4">
                    <Image
                      width={381}
                      height={141}
                      className="w-full"
                      alt="Course photo"
                      src="/course-card-filler.png"
                    />
                    <section className="flex flex-col items-start gap-2">
                      <div className="flex flex-row items-center gap-3 text-left">
                        <h3 className="text-black text-sm font-medium">
                          StartUp School
                        </h3>
                        <span className="whitespace-nowrap rounded-md bg-green-10 px-1 py-1 text-xs font-normal text-green-70">
                          идет набор
                        </span>
                      </div>
                      <p className="w-full text-sm font-normal text-black-60 md:w-3/4">
                        Курс по основам IT-предпринимательства для стартаперов,
                        будущих продакт-менеджеров, школьников и студентов.
                      </p>
                    </section>
                    <section className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-2 text-sm font-normal text-black-60">
                        <Clock size={16} />
                        <span>3 недели</span>
                      </div>
                      <span className="text-base font-medium text-black-100">
                        45 000 ₸
                      </span>
                    </section>
                  </div>
                </Link>
              </div>
            </section>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end md:gap-2">
              <span className="text-sm font-normal text-black-60">
                Страница 1 из 12
              </span>
              <div className="flex flex-row items-center gap-1">
                <Button
                  variant="tertiary"
                  className="flex w-full flex-row items-center justify-center gap-1 text-black-60"
                  type="button"
                >
                  <ChevronLeft size={20} />
                  <span className="text-sm font-medium text-black-70">
                    Предыдущая
                  </span>
                </Button>
                <Button
                  variant="tertiary"
                  className="flex w-full flex-row items-center justify-center gap-1 text-black-60"
                  type="button"
                >
                  <span className="text-sm font-medium text-black-70">
                    Следующая
                  </span>
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
