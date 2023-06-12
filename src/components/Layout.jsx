import { Mail, Menu } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/consts/navbar-links";
import { Button } from "./primitives/Button";

export const Layout = ({ children, footerHidden, theme }) => {
  return (
    <div>
      <div
        className={`${
          theme === "dark"
            ? "bg-black-100 text-white"
            : "bg-white text-black-100"
        }`}
      >
        <nav
          className={` container mx-auto flex flex-row items-center justify-between px-4 py-3 shadow-sm`}
        >
          <div className="flex flex-row items-center gap-5">
            <button className="md:hidden" type="button">
              <Menu size={16} />
            </button>
            <Link href="/">
              <Image
                src={`/astana-hub-logo-${
                  theme === "dark" ? "light" : "dark"
                }.svg`}
                alt="Astana Hub Logo"
                width={146}
                height={40}
              />
            </Link>
          </div>
          <div className="hidden md:flex md:flex-row md:gap-10">
            {navbarLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-base font-medium transition hover:transition-colors focus:text-blue-50 focus:transition-colors ${
                    theme === "dark"
                      ? "hover:text-black-50"
                      : "hover:text-black-20"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/auth/sign-in">
              <Button variant="tertiary">
                Войти <span className="hidden sm:inline-block">в аккаунт</span>
              </Button>
            </Link>
          </div>
        </nav>
      </div>
      <main className="min-h-screen">{children}</main>
      <footer
        className={`${footerHidden && "hidden"} bg-black-100 py-10 sm:py-8`}
      >
        <div className="container mx-auto flex flex-col gap-8 px-4 text-black-50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-row items-center gap-2.5">
            <Mail size={12} />
            <span>Служба поддержки</span>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <address className="not-italic">example@mail.com</address>
            <address className="not-italic">+7 777 777 77 77</address>
          </div>
        </div>
      </footer>
    </div>
  );
};
