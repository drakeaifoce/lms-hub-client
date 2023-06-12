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
