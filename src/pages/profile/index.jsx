import { Trash2, User } from "feather-icons-react/build/IconComponents";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/primitives/Button";
import { Input } from "../../components/primitives/Input";
import { ProfileLayout } from "../../components/ProfileLayout";

export default function MyProfile() {
  return (
    <Layout footerHidden={true}>
      <ProfileLayout>
        <div className="flex min-h-full w-full flex-col">
          <article className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium text-black-100">Профиль</h1>
            <p className="text-sm font-normal text-black-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </article>
          <form className="my-8 flex w-full flex-col gap-6">
            <section className="flex flex-col items-start gap-2">
              <figcaption className="text-sm font-normal text-black-100">
                Аватар
              </figcaption>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row items-center justify-center bg-black-10 p-8">
                  <User size={32} className="text-black-100" />
                </div>
                <div className="flex flex-col gap-3 text-sm font-medium">
                  <Button variant="primary" type="button">
                    Загрузить
                  </Button>
                  <Button
                    variant="tertiary"
                    className="flex flex-row items-center gap-3 text-sm font-medium text-black-70"
                    type="button"
                  >
                    <Trash2 size={16} />
                    <span>Удалить</span>
                  </Button>
                </div>
              </div>
            </section>
            <section className="flex w-full flex-col gap-4 md:gap-5 lg:w-3/5">
              <div className="flex w-full flex-row items-center gap-4">
                <Input name="fname" label="Имя" type="text" />
                <Input name="sname" label="Фамилия" type="text" />
              </div>
              <div className="flex w-full flex-row items-center gap-4">
                <Input name="email" label="E-mail" type="text" />
                <Input name="phone" label="Телефон" type="text" />
              </div>
            </section>
            <Button variant="primary" className="w-fit">
              Сохранить
            </Button>
          </form>
        </div>
      </ProfileLayout>
    </Layout>
  );
}
