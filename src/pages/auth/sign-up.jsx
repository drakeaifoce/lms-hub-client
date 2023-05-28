import { Layout } from "@/components/Layout";
import { Button } from "@/components/primitives/Button";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <Layout>
        <section className="container mx-auto my-16 flex flex-col gap-8 items-center">
            <article className="flex flex-col gap-2 items-center">
                <h2 className="text-black font-medium text-3xl">Регистрация</h2>
                <p className="text-gray text-sm font-normal">Введите данные для регистрации</p>
            </article>
            <div className="flex flex-col sm:flex-row gap-5">
                <Button variant="tertiary" className="flex flex-row gap-2 items-center">
                    <Image src={'/google-logo.svg'} alt="Google logo" width={24} height={24} />
                    <span>Войти через Google</span>
                </Button>
                <Button variant="tertiary" className="flex flex-row gap-2 items-center">
                <Image src={'/github-logo.svg'} alt="Google logo" width={24} height={24} />
                    <span>Войти через GitHub</span>
                </Button>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <span className="text-sm font-normal text-light-gray">или</span>
            </div>
            <form>

            </form>
            <article className="flex flex-row text-sm">
                <p className="text-black font-normal">
                    Уже есть аккаунт?{" "}
                    <Link href={"/auth/sign-in"} className="text-blue font-medium">Войдите</Link>
                </p>
            </article>
        </section>
    </Layout>
  )
}
