import Image from "next/image";
import { Layout } from "../../components/Layout";
import { ProfileLayout } from "../../components/ProfileLayout";

export default function Dashboard() {
  return (
    <Layout footerHidden={true}>
      <ProfileLayout>
        <div className="flex flex-col">
          <article className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium text-black-100">Dashboard</h1>
            <p className="text-sm font-normal text-black-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </article>
          <article className="mx-auto flex h-screen flex-col items-center gap-8">
            <Image
              width={290}
              height={216}
              alt="Dashboard No Information Illustration"
              src="/dashboard-illustration.png"
            />
            <figcaption className="text-center text-sm font-normal text-black-80">
              Пока недостаточно данных для отображения статистики <br /> по
              вашим курсам
            </figcaption>
          </article>
        </div>
      </ProfileLayout>
    </Layout>
  );
}
