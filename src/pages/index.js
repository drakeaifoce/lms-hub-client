import { Clock } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/primitives/Button";
import { featuresBadges } from "@/consts/landing-features-badges";
import { priceFormat } from "@/utils/priceFormatter";

export default function Home() {
  return (
    <Layout theme="dark">
      <div className="bg-black-100">
        <section className="container mx-auto flex flex-col gap-6 px-4 pb-8 pt-10 md:gap-8 md:pb-36 md:pt-40">
          <h1 className="text-left text-4xl font-semibold text-white md:text-center md:text-6xl">
            Astana Hub Education
          </h1>
          <div className="flex flex-col items-end gap-8 pb-8 pt-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col items-start gap-10 md:w-2/3 md:flex-row md:items-start">
              <p className="text-base font-medium text-black-10 md:w-1/2">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <div className="flex flex-row flex-wrap gap-x-2 gap-y-4 md:order-first md:w-1/2">
                {featuresBadges.map((badge) => {
                  return (
                    <span
                      key={badge.id}
                      className="rounded-3xl border border-solid border-black-70 px-4 py-2 text-base font-normal text-white transition hover:bg-white hover:text-black-100 hover:transition-colors"
                    >
                      {badge.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <Link
              href="/courses"
              className="flex h-52 w-52 shrink-0 flex-row items-center justify-center rounded-full border border-dashed border-black-70 text-white transition hover:bg-white hover:text-black-100 hover:transition-colors"
            >
              <span className="rotate-[30deg] text-sm font-medium">
                Посмотреть курсы
              </span>
            </Link>
          </div>
        </section>
        <section className="rounded-t-3xl bg-white">
          <div className="container mx-auto pt-10 md:pt-16">
            <h2 className="text-black text-center text-2xl font-medium md:text-3xl">
              Популярные курсы
            </h2>
            <section className="grid grid-cols-1 gap-x-5 gap-y-5 pt-8 md:grid-cols-2 md:pt-10 lg:grid-cols-3">
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
                      <span className="rounded-md bg-green-10 px-1 py-1 text-xs font-normal text-green-70">
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
                      {priceFormat(45000)} ₸
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
                      <span className="rounded-md bg-black-10 px-1 py-1 text-xs font-normal text-black-70">
                        скоро
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
                      <span className="rounded-md bg-red-10 px-1 py-1 text-xs font-normal text-red-50">
                        набор закрыт
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
                      <span className="rounded-md bg-green-10 px-1 py-1 text-xs font-normal text-green-70">
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
            </section>
          </div>
        </section>
        <section className="bg-green-30">
          <div className="flex flex-row justify-center rounded-b-3xl bg-white pb-10 pt-8 md:pb-16 md:pt-10">
            <Link href="/courses">
              <Button
                variant="tertiary"
                type="button"
                className="mx-4 w-full md:w-fit"
              >
                Посмотреть все
              </Button>
            </Link>
          </div>
          <div className="container mx-auto pb-24 pt-8 md:pb-32 md:pt-10">
            <section className="flex flex-col gap-20">
              <h2 className="text-center text-2xl font-medium text-white md:text-3xl">
                Наши партнеры
              </h2>
              <div className="grid grid-cols-2 items-center gap-y-24 md:grid-cols-3 md:divide-x md:divide-white">
                <div className="flex w-full flex-row justify-center">
                  <Image
                    src="/samsung-logo.png"
                    width={110}
                    height={16}
                    alt="Samsung Logo"
                  />
                </div>
                <div className="flex w-full flex-row justify-center">
                  <Image
                    src="/visa-logo.png"
                    width={111}
                    height={36}
                    alt="Visa Logo"
                  />
                </div>
                <div className="flex w-full flex-row justify-center">
                  <Image
                    src="/netflix-logo.png"
                    width={132}
                    height={36}
                    alt="Netflix Logo"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </Layout>
  );
}
