import Image from "next/image"
import Link from "next/link"
import { Button } from "./primitives/Button"
import { Inter } from 'next/font/google'
import { Mail, Menu } from "feather-icons-react/build/IconComponents"

const ourFont = Inter({ subsets: ['latin'] })

export const Layout = ({ children, footerHidden, theme }) => {
  return (
    <div className={ourFont.className }>
        <div className={`${theme === 'dark' ? 'bg-black-100 text-white' : "bg-white text-black-100"}`}>
            <nav className={` container mx-auto px-4 py-3 shadow-sm flex flex-row justify-between items-center`}>
                <div className="flex flex-row gap-5 items-center">
                    <button className="sm:hidden" type="button">
                        <Menu size={16} />
                    </button>
                    <Link href={'/'}>
                        <Image src={`/astana-hub-logo-${theme === "dark" ? 'light' : "dark"}.svg`} alt="Astana Hub Logo" width={146} height={40} />
                    </Link>
                </div>
                <div className="hidden sm:flex sm:flex-row sm:gap-10">
                    <Link href={'/'} className="text-base font-medium">
                        Главная
                    </Link>
                    <Link href={'/courses'} className="text-base font-medium">
                        Курсы
                    </Link> 
                    <Link href={'/contacts'} className="text-base font-medium">
                        Контакты
                    </Link>
                </div>
                <div className="flex flex-row gap-3">
                    <Link href={'/auth/sign-in'}>
                        <Button variant="tertiary">
                            Войти <span className="hidden sm:inline-block">в аккаунт</span>
                        </Button>
                    </Link>
                </div>
            </nav>
        </div>
        <main className="min-h-screen">
            {children}
        </main>
        <footer className={`${footerHidden && 'hidden'} bg-black-100 o py-10 sm:py-8` + ourFont.className}>
            <div className="text-black-50 px-4 flex flex-col gap-8 sm:flex-row sm:justify-between container mx-auto sm:items-center">
                <div className="flex flex-row gap-2.5 items-center">
                    <Mail size={12}/>
                    <span>Служба поддержки</span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                    <address className="not-italic">example@mail.com</address>
                    <address className="not-italic">+7 777 777 77 77</address>
                </div>
            </div>
        </footer>
    </div>
  )
}
