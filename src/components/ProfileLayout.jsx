import {
  BookOpen,
  Calendar,
  LogOut,
  Mail,
  PieChart,
  User,
} from "feather-icons-react/build/IconComponents";
import Link from "next/link";
import { useRouter } from "next/router";

export const ProfileLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-0">
      <div className="hidden md:col-span-4 md:block lg:col-span-3 xl:col-span-2">
        <div className="flex min-h-screen flex-col gap-14 border-r border-solid border-black-20 px-4 py-8">
          <ul className="text-sm font-normal text-black-60">
            <li
              className={`${
                router.pathname === "/profile/dashboard" &&
                "bg-black-10 text-black-100"
              } px-5 py-2`}
            >
              <Link href="/profile/dashboard" className="flex flex-row gap-4">
                <PieChart size={16} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/profile" && "bg-black-10 text-black-100"
              } px-5 py-2`}
            >
              <Link
                href="/profile"
                className="flex flex-row items-center gap-4"
              >
                <User size={16} />
                <span>Мой профиль</span>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/profile/my-courses" &&
                "bg-black-10 text-black-100"
              } px-5 py-2`}
            >
              <Link
                href="/profile/my-courses"
                className="flex flex-row items-center gap-4"
              >
                <BookOpen size={16} />
                <span>Мои курсы</span>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/profile/calendar" &&
                "bg-black-10 text-black-100"
              } px-5 py-2`}
            >
              <Link
                href="/profile/calendar"
                className="flex flex-row items-center gap-4"
              >
                <Calendar size={16} />
                <span>Календарь</span>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/profile/support" &&
                "bg-black-10 text-black-100"
              } px-5 py-2`}
            >
              <Link
                href="/profile/support"
                className="flex flex-row items-center gap-4"
              >
                <Mail size={16} />
                <span>Служба поддержки</span>
              </Link>
            </li>
          </ul>
          <button
            className="flex flex-row items-center gap-4 px-5 py-2 text-sm font-normal text-red-50"
            type="button"
          >
            <LogOut size={16} />
            <span>Выйти из аккаунта</span>
          </button>
        </div>
      </div>
      <div className="block md:hidden">Here is overflow-x menu tabs</div>
      <div className="px-4 pb-10 pt-8 md:col-span-8 md:mx-6 lg:col-span-9 xl:col-span-10">
        {children}
      </div>
    </div>
  );
};
