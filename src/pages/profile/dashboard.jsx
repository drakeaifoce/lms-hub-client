import { Layout } from "@/components/Layout";
import { ProfileLayout } from "@/components/ProfileLayout";

export default function Dashboard() {
  return (
    <Layout footerHidden={true}>
      <ProfileLayout>
        Dashboard
      </ProfileLayout>
    </Layout>
  )
}
