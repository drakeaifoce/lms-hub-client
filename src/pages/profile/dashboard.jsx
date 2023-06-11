import { Layout } from "@/components/Layout";
import { ProfileLayout } from "@/components/ProfileLayout";

export default function Dashboard() {
  return (
    <Layout footerHidden={true}>
      <ProfileLayout>
        <section className="flex flex-col gap-2">
          <h1 className="text-black-100 font-medium text-2xl">Dashboard</h1>
          <p className="text-black-60 font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
      </ProfileLayout>
    </Layout>
  )
}
