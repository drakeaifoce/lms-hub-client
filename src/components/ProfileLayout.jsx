import { BookOpen, Calendar, LogOut, Mail, PieChart, User } from "feather-icons-react/build/IconComponents"
import Link from "next/link"
import { useRouter } from "next/router"

export const ProfileLayout = ({children}) => {
    const router = useRouter()

  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-0">
        <div className="hidden md:block md:col-span-4 lg:col-span-3 xl:col-span-2">
            <div className="min-h-screen flex flex-col gap-14 px-4 py-8 border-r border-solid border-black-20">
                <ul className="text-black-60 font-normal text-sm">
                    <li className={`${router.pathname === '/profile/dashboard' && 'bg-black-10 text-black-100'} py-2 px-5`}>
                        <Link href={'/profile/dashboard'} className="flex flex-row gap-4">
                            <PieChart size={16}/>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/profile' && 'bg-black-10 text-black-100'} py-2 px-5`}>
                        <Link href={'/profile'} className="flex flex-row gap-4 items-center">
                            <User size={16}/>
                            <span>Мой профиль</span>
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/profile/my-courses' && 'bg-black-10 text-black-100'} py-2 px-5`}>
                        <Link href={'/profile/my-courses'} className="flex flex-row gap-4 items-center">
                            <BookOpen size={16}/>
                            <span>Мои курсы</span>
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/profile/calendar' && 'bg-black-10 text-black-100'} py-2 px-5`}>
                        <Link href={'/profile/calendar'} className="flex flex-row gap-4 items-center">
                            <Calendar size={16}/>
                            <span>Календарь</span>
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/profile/support' && 'bg-black-10 text-black-100'} py-2 px-5`}>
                        <Link href={'/profile/support'} className="flex flex-row gap-4 items-center">
                            <Mail size={16}/>
                            <span>Служба поддержки</span>
                        </Link>
                    </li>
                </ul>
                <button className="py-2 px-5 flex flex-row gap-4 text-red-50 font-normal text-sm items-center" type="button">
                    <LogOut size={16}/>
                    <span>Выйти из аккаунта</span>
                </button>
            </div>
        </div>
        <div className="block md:hidden">Here is overflow-x menu tabs</div>
        <div className="pt-8 pb-10 px-4 md:mx-6 md:col-span-8 lg:col-span-9 xl:col-span-10">{children}</div>
    </div>
  )
}
