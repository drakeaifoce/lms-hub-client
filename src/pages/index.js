import { Layout } from "@/components/Layout";
import { Clock } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/primitives/Button";
export default function Home() {
  return (
    <Layout theme={'dark'}>
      <div className="bg-black-100">
        <section className="px-4 pt-10 pb-8 md:pt-40 md:pb-36 flex flex-col gap-6 md:gap-8">
          <h1 className="text-white font-semibold text-4xl md:text-6xl md:text-center px-4">Astana Hub Education</h1>
          <div className="flex flex-col pt-6 pb-8 gap-8 md:flex-row justify-between px-4 md:px-20">
            <div className="flex flex-col md:flex-row gap-10 md:w-2/3 md:items-end">
              <p className="md:w-1/2 text-black-10 text-base font-medium">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <div className="flex flex-row flex-wrap md:order-first md:w-1/2 gap-2">
                <span className="text-white text-base font-normal px-4 py-2 border border-solid border-black-70 rounded-3xl">
                  Стартапы
                </span>
                <span className="text-white text-base font-normal px-4 py-2 border border-solid border-black-70 rounded-3xl">
                  Программирование
                </span>
                <span className="text-white text-base font-normal px-4 py-2 border border-solid border-black-70 rounded-3xl">
                  Курсы
                </span>
                <span className="text-white text-base font-normal px-4 py-2 border border-solid border-black-70 rounded-3xl">
                  Цифровизация
                </span>
                <span className="text-white text-base font-normal px-4 py-2 border border-solid border-black-70 rounded-3xl">
                  Хакатоны
                </span>
              </div>
            </div>
            <Link href={'/courses'} className="flex flex-row justify-end">
              <Image 
                src={'/watch-courses-button.svg'}
                width={200}
                height={200}
                alt="Watch courses"
              />
            </Link>
          </div>
        </section>
        <section className="bg-white rounded-t-3xl">
          <div className="container mx-auto pt-10 md:pt-16">
            <h2 className="text-black font-medium text-2xl md:text-3xl text-center">Популярные курсы</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 pt-8 md:pt-10">
              <Link href={'/course/1'} className="bg-white border border-black-20 mx-4 rounded-lg">
                <div className="p-4 flex flex-col gap-4">
                  <Image width={381} height={141} className="w-full" alt="Course photo" src={'/course-card-filler.png'}/>
                  <section className="flex flex-col items-start gap-2">
                    <div className="flex flex-row text-left gap-3 items-center">
                      <h3 className="font-medium text-sm text-black">StartUp School</h3>
                      <span className="px-1 py-1 bg-green-10 text-green-70 rounded-md font-normal text-xs">идет набор</span>
                    </div>
                    <p className="text-black-60 font-normal text-sm w-full md:w-3/4">
                    Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.
                    </p>
                  </section>
                  <section className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2 text-black-60 text-sm font-normal items-center">
                      <Clock size={16}/>
                      <span>3 недели</span>
                    </div>
                    <span className="text-black-100 font-medium text-base">
                      45 000 ₸
                    </span>
                  </section>
                </div>
              </Link>

              <Link href={'/course/1'} className="bg-white border border-black-20 mx-4 rounded-lg">
                <div className="p-4 flex flex-col gap-4">
                  <Image width={381} height={141} className="w-full" alt="Course photo" src={'/course-card-filler.png'}/>
                  <section className="flex flex-col items-start gap-2">
                    <div className="flex flex-row text-left gap-3 items-center">
                      <h3 className="font-medium text-sm text-black">StartUp School</h3>
                      <span className="px-1 py-1 bg-green-10 text-green-70 rounded-md font-normal text-xs">идет набор</span>
                    </div>
                    <p className="text-black-60 font-normal text-sm w-full md:w-3/4">
                    Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.
                    </p>
                  </section>
                  <section className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2 text-black-60 text-sm font-normal items-center">
                      <Clock size={16}/>
                      <span>3 недели</span>
                    </div>
                    <span className="text-black-100 font-medium text-base">
                      45 000 ₸
                    </span>
                  </section>
                </div>
              </Link>

              <Link href={'/course/1'} className="bg-white border border-black-20 mx-4 rounded-lg">
                <div className="p-4 flex flex-col gap-4">
                  <Image width={381} height={141} className="w-full" alt="Course photo" src={'/course-card-filler.png'}/>
                  <section className="flex flex-col items-start gap-2">
                    <div className="flex flex-row text-left gap-3 items-center">
                      <h3 className="font-medium text-sm text-black">StartUp School</h3>
                      <span className="px-1 py-1 bg-green-10 text-green-70 rounded-md font-normal text-xs">идет набор</span>
                    </div>
                    <p className="text-black-60 font-normal text-sm w-full md:w-3/4">
                    Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.
                    </p>
                  </section>
                  <section className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2 text-black-60 text-sm font-normal items-center">
                      <Clock size={16}/>
                      <span>3 недели</span>
                    </div>
                    <span className="text-black-100 font-medium text-base">
                      45 000 ₸
                    </span>
                  </section>
                </div>
              </Link>

              <Link href={'/course/1'} className="bg-white border border-black-20 mx-4 rounded-lg">
                <div className="p-4 flex flex-col gap-4">
                  <Image width={381} height={141} className="w-full" alt="Course photo" src={'/course-card-filler.png'}/>
                  <section className="flex flex-col items-start gap-2">
                    <div className="flex flex-row text-left gap-3 items-center">
                      <h3 className="font-medium text-sm text-black">StartUp School</h3>
                      <span className="px-1 py-1 bg-green-10 text-green-70 rounded-md font-normal text-xs">идет набор</span>
                    </div>
                    <p className="text-black-60 font-normal text-sm w-full md:w-3/4">
                    Курс по основам IT-предпринимательства для стартаперов, будущих продакт-менеджеров, школьников и студентов.
                    </p>
                  </section>
                  <section className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2 text-black-60 text-sm font-normal items-center">
                      <Clock size={16}/>
                      <span>3 недели</span>
                    </div>
                    <span className="text-black-100 font-medium text-base">
                      45 000 ₸
                    </span>
                  </section>
                </div>
              </Link>
            </section>
          </div>
        </section>
        <section className="bg-green-30">
            <div className="flex flex-row justify-center bg-white pt-8 pb-10 md:pt-10 md:pb-16 rounded-b-3xl">
              <Button variant="tertiary">
                Посмотреть все
              </Button>
            </div>
            <div className="container mx-auto pt-8 md:pt-10 pb-24 md:pb-32">
              <section className="flex flex-col gap-20">
                <h2 className="text-white font-medium text-2xl md:text-3xl text-center">Наши партнеры</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-y-24">
                  <div className="flex flex-row w-full justify-center">
                    <Image src={'/samsung-logo.png'} width={110} height={16}  alt="Samsung Logo"/>
                  </div>
                  <div className="flex flex-row w-full justify-center">
                    <Image src={'/visa-logo.png'} width={111} height={36}  alt="Visa Logo"/>
                  </div>
                  <div className="flex flex-row w-full justify-center">
                    <Image src={'/netflix-logo.png'} width={132} height={36}  alt="Netflix Logo"/>
                  </div>
                </div>
              </section>
            </div>
        </section>
      </div>
   
    </Layout>
  )
}
