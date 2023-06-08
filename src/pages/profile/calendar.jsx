import { Layout } from "@/components/Layout";
import { ProfileLayout } from "@/components/ProfileLayout";

export default function Calendar() {
  return (
    <Layout footerHidden={true}>
      <ProfileLayout>
        Calendar
      </ProfileLayout>
    </Layout>
  )
}
