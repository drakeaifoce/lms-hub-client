import { Check } from "feather-icons-react/build/IconComponents";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/primitives/Button";

export default function SentResetLink() {
  return (
    <Layout footerHidden={true}>
      <section className="container mx-auto my-16 w-fit">
        <div className="flex flex-col items-center gap-6 px-4 md:gap-8">
          <section className="flex h-14 w-14 items-center justify-center rounded-full bg-green-20 text-green-70">
            <Check size={24} />
          </section>
          <section className="flex flex-col items-center gap-2">
            <h1 className="text-center text-2xl font-medium text-black-100 md:text-3xl">
              Проверьте почту
            </h1>
            <article className="flex flex-col items-center gap-0.5">
              <p className="text-center text-sm font-normal text-black-60">
                Мы отправили ссылку для восстановления пароля на
              </p>
              <address className="text-center text-sm font-medium not-italic text-black-80">
                example@mail.com
              </address>
            </article>
          </section>
          <Link href="/" className="w-full">
            <Button variant="primary" type="button" className="w-full">
              Вернуть на главную
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
