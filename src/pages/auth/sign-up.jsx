import { Layout } from "@/components/Layout";
import { Button } from "@/components/primitives/Button";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/primitives/Input";
export default function SignUp() {
  return (
    <Layout footerHidden={true}>
        <section className="container mx-auto my-16 w-fit">
            <div className="flex flex-col gap-8 items-center px-4">
            <article className="flex flex-col gap-8 items-center px-4">
                <h2 className="text-black font-medium text-3xl">Регистрация</h2>
                <p className="text-black-60 text-sm font-normal">Введите данные для регистрации</p>
            </article>
            <div className="flex flex-row gap-5 w-full sm:w-fit">
                <Button variant="tertiary" className="w-full sm:w-fit flex flex-row sm:gap-2 items-center justify-center">
                    <Image src={'/google-logo.svg'} alt="Google logo" width={24} height={24} />
                    <span className="hidden sm:block">Войти через Google</span>
                </Button>
                <Button variant="tertiary" className="w-full sm:w-fit flex flex-row sm:gap-2 items-center justify-center">
                    <Image src={'/github-logo.svg'} alt="Google logo" width={24} height={24} />
                    <span className="hidden sm:block">Войти через GitHub</span>
                </Button>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <span className="text-sm font-normal text-black-30">или</span>
            </div>
            <form className="flex flex-col gap-4 w-full">
                <Input name="fname" label="Имя" type="text" placeholder="Введите имя"/>
                <Input name="sname" label="Фамилия" type="text" placeholder="Введите фамилию"/>
                <Input name="email" label="E-mail" type="email" placeholder="Введите e-mail"/>
                <Input name="password" label="Пароль" type="password" placeholder="Придумайте пароль"/>
                <div className="flex flex-row items-center mb-4">
                    <input id="rememberMe" type="checkbox" className="w-4 h-4 text-blue-50 bg-white border border-black-20 rounded focus:ring-1"/>
                    <label for="rememberMe" className="ml-2 text-sm font-normal text-black">Запомнить меня</label>
                </div>
                <Button variant="primary" type="submit">Регистрация</Button>
                </form>
            <article className="flex flex-row text-sm">
                <p className="text-black font-normal">
                    Уже есть аккаунт?{" "}
                    <Link href={"/auth/sign-in"} className="text-blue-50 font-medium">Войдите</Link>
                </p>
            </article>
            </div>
        </section>
    </Layout>
  )
}
