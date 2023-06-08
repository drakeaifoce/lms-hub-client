import { Layout } from "@/components/Layout";
import { Calendar, Clock, Lock } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/primitives/Button";

export default function Course() {
  return (
    <Layout>
        <div className="md:grid md:grid-cols-2 container mx-auto md:items-center">
            <div className="w-full my-10 md:my-16  md:py-4 flex flex-col gap-8 px-4 md:gap-10">
                <nav className="flex flex-row gap-2">
                    <Link href={'/'} className="text-black-40 text-sm font-medium">Главная</Link>
                    <span className="text-black-20 text-sm font-medium">/</span>
                    <Link href={'/courses/1'} className="text-sm font-medium text-black-70">StartUp School</Link>
                </nav>
                <div className="flex flex-col gap-8">
                    <section className="flex flex-col gap-7">
                        <h1 className="text-black-100 font-medium text-2xl md:font-semibold md:text-4xl">
                            StartUp School
                        </h1>
                        <Image src={'/course-card-filler.png'} width={344} height={200} alt="Course name" className="md:hidden w-full"/>
                        <div className="flex flex-row gap-4">
                            <Image src="/temp-avatar.png" width={48} height={48} className="rounded-full" />
                            <div className="flex flex-col gap-0.5">
                                <h3 className="text-black-80 font-medium text-base">
                                    Имя Фамилия
                                </h3>
                                <p className="text-black-50 text-sm font-normal">
                                    Автор курса
                                </p>
                            </div>
                        </div>
                        <article className="text-sm font-normal text-black-80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </article>
                    </section>
                    <section className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="text-black-60 font-normal text-sm flex flex-row gap-2">
                            <Clock size={16} />
                            <span>3 недели</span>
                        </div>
                        <span className="hidden md:block text-black-20 font-normal text-sm">
                            |
                        </span>
                        <div className="text-black-60 font-normal text-sm flex flex-row gap-2">
                            <Calendar size={16} />
                            <span>Старт 1 июня 2023</span>
                        </div>
                        <span className="hidden md:block text-black-20 font-normal text-sm">
                            |
                        </span>
                        <div className="flex">
                            <span className="px-1 py-1 bg-green-10 text-green-70 rounded-md font-normal text-xs ">идет набор</span>
                        </div>
                    </section>
                    <section>
                        <span className="text-black-80 text-2xl font-medium">
                            45 000 ₸
                        </span>
                    </section>
                    <section>
                        <Button variant="primary" type="button" className="w-full md:w-fit">
                            Начать обучение
                        </Button>
                    </section>
                </div>
            </div>
            <Image src={'/course-card-filler.png'} width={710} height={754} alt="Course name" className="hidden md:block object-fill"/>
        </div>
        <div className="bg-black-5 ">
            <div className="container mx-auto">
                <div className="px-4 py-16 flex flex-col items-center gap-10">
                    <section className="flex flex-col gap-4">
                        <h2 className="text-left md:text-center text-black-100 text-3xl font-medium">Подробнее о курсе</h2>
                        <p className="text-sm font-normal text-black-80 text-left md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                    </section>
                <Image src={'/video-filler.png'} width={846} height={480} alt="Introduction to course video"/>
                </div>
            </div>
        </div>

        <div className="bg-white">
            <div className="container mx-auto">
                <div className="px-4 py-10 md:py-16">
                    <section className="border border-solid border-black-20 py-5 px-6 flex flex-row items-center gap-4 text-black-50 text-base font-medium rounded-lg justify-center">
                        <Lock size={20} />
                        <p>Зарегистрируйтесь, чтобы посмотреть силлабус</p>
                    </section>
                    {/* According to auth */}
                    <section className="flex flex-col gap-12">
                        <h2 className="text-2xl font-medium text-black-100 md:text-3xl text-left md:text-center">
                            Чему вы научитесь?
                        </h2>
                    </section>
                </div>
            </div>
        </div>
    </Layout>
  )
}
