import Link from "next/link";
import { useForm } from "react-hook-form";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/primitives/Button";
import { Input } from "../../components/primitives/Input";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Layout footerHidden={true}>
      <section className="container mx-auto my-16 w-fit">
        <div className="flex flex-col items-center gap-8 px-4">
          <article className="flex flex-col items-center gap-2">
            <h2 className="text-black text-center text-3xl font-medium">
              Восстановление пароля
            </h2>
            <p className="text-center text-sm font-normal text-black-60">
              Введите e-mail и мы отправим вам ссылку для <br /> восстановления
              пароля
            </p>
          </article>
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              name="email"
              label="E-mail"
              type="email"
              placeholder="Введите e-mail"
              {...register("email", {
                required: "Заполните поле",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Неверный формат email",
                },
              })}
              error={errors.email}
            />
            <Button variant="primary" type="submit">
              Далее
            </Button>
          </form>
          <article className="flex flex-row text-center text-sm">
            <Link href="/auth/sign-in" className="font-medium text-blue-50">
              Я вспомнил (-а) пароль
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
