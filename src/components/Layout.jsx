import Image from "next/image"
import Link from "next/link"
import { Button } from "./primitives/Button"
import { Inter } from 'next/font/google'
import { Menu } from "feather-icons-react/build/IconComponents"

const ourFont = Inter({ subsets: ['latin'] })

export const Layout = ({ children }) => {
  return (
    <>
        <nav className="container mx-auto px-4 py-3 shadow-sm flex flex-row justify-between items-center">
            <div className="flex flex-row gap-5 items-center">
                <button className="text-black sm:hidden">
                    <Menu size={16} />
                </button>
                <Image src="/astana-hub-logo.svg" alt="Astana Hub Logo" width={146} height={40} />
            </div>
            <div className="hidden sm:flex sm:flex-row sm:gap-10">
                <Link href={'/home'} className="text-black text-base font-medium">
                    Главная
                </Link>
                <Link href={'/courses'} className="text-black text-base font-medium">
                    Курсы
                </Link> 
                <Link href={'/contacts'} className="text-black text-base font-medium">
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
        <main className={ourFont.className}>
            {children}
        </main>
        <footer></footer>
    </>
  )
}
