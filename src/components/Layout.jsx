import Image from "next/image"
import Link from "next/link"
import { Button } from "./primitives/Button"
export const Layout = () => {
  return (
    <>
        <nav className="container mx-auto px-4 py-3 shadow-sm flex flex-row justify-between">
            <Image src="/astana-hub-logo.svg" alt="Astana Hub Logo" width={146} height={40} />
            <div className="flex flex-row gap-3">
                <Link href={'/auth/sign-in'}>
                    <Button variant="tertiary">
                        Войти
                    </Button>
                </Link>
                <Link href={'/auth/sign-up'}>
                    <Button variant="primary">
                        Регистрация
                    </Button>
                </Link>
            </div>
        </nav>
    </>
  )
}
