import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { LogOut } from "feather-icons-react/build/IconComponents";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  BookOpen,
  Calendar,
  Mail,
  PieChart,
  User,
} from "feather-icons-react/build/IconComponents";

export const profileNavigationLinks = [
  {
    id: 1,
    name: "Dashboard",
    href: "/profile/dashboard",
    icon: <PieChart size={16} />,
  },
  {
    id: 2,
    name: "Мой профиль",
    href: "/profile",
    icon: <User size={16} />,
  },
  {
    id: 3,
    name: "Мои курсы",
    href: "/profile/my-courses",
    icon: <BookOpen size={16} />,
  },
  {
    id: 4,
    name: "Календарь",
    href: "/profile/calendar",
    icon: <Calendar size={16} />,
  },
  {
    id: 5,
    name: "Служба поддержки",
    href: "/profile/support",
    icon: <Mail size={16} />,
  },
];

export const ProfileLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-0">
      <div className="hidden md:col-span-4 md:block lg:col-span-3 xl:col-span-2">
        <div className="flex min-h-screen flex-col gap-14 border-r border-solid border-black-20 px-4 py-8">
          <ul className="text-sm font-normal text-black-60">
            {profileNavigationLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    router.pathname === link.href &&
                    "bg-black-10 text-black-100"
                  } px-5 py-2`}
                >
                  <Link href={link.href} className="flex flex-row gap-4">
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}
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
      <div className="block md:hidden">
        <NavigationMenu.Root className="px-4">
          <NavigationMenu.List className="flex flex-row items-center gap-4 overflow-auto pb-4 text-sm font-medium">
            {profileNavigationLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`flex flex-row items-center gap-2 whitespace-nowrap px-2 py-4 ${
                    router.pathname === link.href
                      ? "border-b border-blue-50 text-blue-50"
                      : " text-black-60"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
      <div className="px-4 pb-10 md:col-span-8 md:mx-6 md:pt-8 lg:col-span-9 xl:col-span-10">
        {children}
      </div>
    </div>
  );
};
