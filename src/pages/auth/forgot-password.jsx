import { Layout } from "@/components/Layout";
import { Input } from "@/components/primitives/Input";
import { Button } from "@/components/primitives/Button";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <Layout footerHidden={true}>
      <section className="container mx-auto my-16 w-fit">
        <div className="flex flex-col gap-8 items-center px-4">
          <article className="flex flex-col gap-2 items-center">
              <h2 className="text-black font-medium text-3xl text-center">Восстановление пароля</h2>
              <p className="text-black-60 text-sm font-normal text-center">Введите e-mail и мы отправим вам ссылку для <br/> восстановления пароля</p>
          </article>
          <form className="flex flex-col gap-4 w-full">
            <Input name="email" label="E-mail" type="email" placeholder="Введите e-mail"/>
            <Button variant="primary" type="submit">Далее</Button>
          </form>
          <article className="flex flex-row text-sm text-center">
            <Link href={"/auth/sign-in"} className="text-blue-50 font-medium">Я вспомнил (-а) пароль</Link>
          </article>
        </div>
      </section>
    </Layout>
  )
}
