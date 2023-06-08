import { Layout } from "@/components/Layout"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Clock } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import { Button } from "@/components/primitives/Button";

export default function AllCourses() {
  return (
    <Layout>
      <div className="container mx-auto my-10 md:mb-14 md:mt-15">
          <div className="flex flex-col gap-10 md:gap-8 px-4">
              <h1 className="text-black-100 font-medium text-2xl md:text-3xl text-center">Курсы</h1>
              <div className="flex flex-col gap-6 md:gap-7">
                <nav className="flex flex-row justify-between items-center">
                  <div>Tabs</div>
                  <div className="md:hidden">Filters mobile</div>
                </nav>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="hidden col-span-1 md:block border border-solid border-black-20 rounded-lg">
                    <div className="m-6 flex flex-col gap-12">
                      <section className="border-b border-solid border-black-15">
                        <h4 className="text-black-100 font-medium text-base">Профессии</h4>
                      </section>
                      <section className="border-b border-solid border-black-15">
                        <h4 className="text-black-100 font-medium text-base">IT школы</h4>
                      </section>
                      <section className="border-b border-solid border-black-15">
                        <h4 className="text-black-100 font-medium text-base">Длительность</h4>
                      </section>
                      <section className="border-b border-solid border-black-15">
                        <h4 className="text-black-100 font-medium text-base">Цена</h4>
                      </section>
                    </div>
                  </div>
                  <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                    <Link href={'/course/1'} className="bg-white border border-black-20 mx-4 rounded-lg">
                      <div className="p-4 flex flex-col gap-4">
                        <Image width={381} height={141} className="w-full" alt="Course photo" src={'/course-card-filler.png'}/>
                        <section className="flex flex-col items-start gap-2">
                          <div className="flex flex-row text-left gap-3 items-center">
                            <h3 className="font-medium text-sm text-black">StartUp School</h3>
                            <span className="px-1 py-1 bg-green-10 text-green-70 rounded-md font-normal text-xs  whitespace-nowrap">идет набор</span>
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
                            <span className="px-1 py-1 bg-green-10 text-green-70 rounded-md font-normal text-xs  whitespace-nowrap">идет набор</span>
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
                            <span className="px-1 py-1 bg-green-10 text-green-70 rounded-md font-normal text-xs whitespace-nowrap">идет набор</span>
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
                  </div>
                </section>
                <div className="flex flex-col gap-3 md:flex-row md:gap-2 md:justify-end md:items-center">
                  <span className="text-black-60 font-normal text-sm">Страница 1 из 12</span>
                  <div className="flex flex-row gap-1 items-center">
                    <Button variant="tertiary" className="flex flex-row gap-1 w-full items-center text-black-60 justify-center">
                      <ChevronLeft size={20}/>
                      <span className="text-black-70 text-sm font-medium">
                        Предыдущая
                      </span>
                    </Button>
                    <Button variant="tertiary" className="flex flex-row gap-1 w-full items-center text-black-60 justify-center">
                      <span className="text-black-70 text-sm font-medium">
                        Следующая
                      </span>
                      <ChevronRight size={20}/>
                    </Button>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}
