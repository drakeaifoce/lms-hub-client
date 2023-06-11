import { Layout } from "@/components/Layout";
import { ProfileLayout } from "@/components/ProfileLayout";

export default function Dashboard() {
  return (
    <Layout footerHidden={true}>
      <ProfileLayout>
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium text-black-100">Dashboard</h1>
          <p className="text-sm font-normal text-black-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </ProfileLayout>
    </Layout>
  );
}
