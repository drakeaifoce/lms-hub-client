import { Layout } from "@/components/Layout";
import { Button } from "@/components/primitives/Button";
import { Input } from "@/components/primitives/Input";
import Image from "next/image";
import Link from "next/link";
export default function SignIn() {
  return (
    <Layout>
        <section className="container mx-auto my-16 ">
            <div className="flex flex-col gap-8 items-center px-4">
                <article className="flex flex-col gap-2 items-center">
                    <h2 className="text-black font-medium text-3xl">Войти</h2>
                    <p className="text-gray text-sm font-normal text-center">Введите данные для входа в аккаунт</p>
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
                    <span className="text-sm font-normal text-light-gray">или</span>
                </div>
                <form className="flex flex-col gap-4">
                    <Input name="email" label="E-mail" type="email" placeholder="Введите e-mail"/>
                    <Input name="password" label="Пароль" type="password" placeholder="Введите пароль"/>
                    <div class="flex flex-row items-center mb-4">
                        <input id="rememberMe" type="checkbox" className="w-4 h-4 text-blue bg-white border border-light-gray rounded focus:ring-1"/>
                        <label for="rememberMe" className="ml-2 text-sm font-normal text-black">Запомнить меня</label>
                    </div>
                    <Button variant="primary">Войти</Button>
                </form>
                <article className="flex flex-row text-sm text-center">
                    <p className="text-black font-normal">
                        Еще нет аккаунта?{" "}
                        <Link href={"/auth/sign-up"} className="text-blue font-medium">Зарегистрируйтесь</Link>
                    </p>
                </article>
            </div>
        </section>
    </Layout>
  )
}
