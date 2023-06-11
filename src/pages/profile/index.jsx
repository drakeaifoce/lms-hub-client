import { Layout } from "@/components/Layout";
import { ProfileLayout } from "@/components/ProfileLayout";

export default function MyProfile() {
  return (
    <Layout footerHidden={true}>
      <ProfileLayout>123</ProfileLayout>
    </Layout>
  );
}
