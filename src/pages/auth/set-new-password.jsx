import Link from "next/link";
import { useForm } from "react-hook-form";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/primitives/Button";
import { Input } from "@/components/primitives/Input";

export default function SetNewPassword() {
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
              Новый пароль
            </h2>
            <p className="text-center text-sm font-normal text-black-60">
              Придумайте новый пароль
            </p>
          </article>
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              name="newPassword"
              label="Новый пароль"
              type="password"
              placeholder="Придуймате новый пароль"
              {...register("newPassword", {
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
              error={errors.newPassword}
            />
            <Input
              name="repeatPassword"
              label="Повторите новый пароль"
              type="password"
              placeholder="Повторите новый пароль"
              {...register("repeatPassword", {
                required: "Заполните поле",
                validate: (value) => {
                  if (value !== watch("newPassword"))
                    return "Пароли не совпадают";
                },
              })}
              error={errors.repeatPassword}
            />
            <Button variant="primary" type="submit">
              Далее
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
