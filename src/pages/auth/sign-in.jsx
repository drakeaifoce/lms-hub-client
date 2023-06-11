import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/primitives/Button";
import { Input } from "@/components/primitives/Input";

export default function SignIn() {
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
            <h2 className="text-black text-3xl font-medium">Войти</h2>
            <p className="text-center text-sm font-normal text-black-60">
              Введите данные для входа в аккаунт
            </p>
          </article>
          <div className="flex w-full flex-row gap-5 sm:w-fit">
            <Button
              variant="tertiary"
              className="flex w-full flex-row items-center justify-center sm:w-fit sm:gap-2"
              type="button"
            >
              <Image
                src="/google-logo.svg"
                alt="Google logo"
                width={24}
                height={24}
              />
              <span className="hidden sm:block">Войти через Google</span>
            </Button>
            <Button
              variant="tertiary"
              className="flex w-full flex-row items-center justify-center sm:w-fit sm:gap-2"
              type="button"
            >
              <Image
                src="/github-logo.svg"
                alt="Google logo"
                width={24}
                height={24}
              />
              <span className="hidden sm:block">Войти через GitHub</span>
            </Button>
          </div>
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-normal text-black-30">или</span>
          </div>
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              name="email"
              label="E-mail"
              type="text"
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
            <Input
              name="password"
              label="Пароль"
              type="password"
              placeholder="Введите пароль"
              {...register("password", {
                required: "Заполните поле",
                maxLength: {
                  value: 255,
                  message: "Пароль не должен содержать более 255 символов",
                },
                minLength: {
                  value: 8,
                  message: "Пароль должен содержать не менее 8 символов",
                },
              })}
              error={errors.password}
            />
            <div className="mb-4 flex flex-row items-center">
              <input
                id="rememberMe"
                type="checkbox"
                className="h-4 w-4 rounded border border-black-20 bg-white text-blue-50 focus:ring-1"
              />
              <label
                htmlFor="rememberMe"
                className="text-black ml-2 text-sm font-normal"
              >
                Запомнить меня
              </label>
            </div>
            <Button variant="primary" type="submit">
              Войти
            </Button>
          </form>
          <article className="flex flex-row text-center text-sm">
            <p className="text-black font-normal">
              Еще нет аккаунта?{" "}
              <Link href="/auth/sign-up" className="font-medium text-blue-50">
                Зарегистрируйтесь
              </Link>
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
