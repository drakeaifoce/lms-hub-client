import { Layout } from "../../components/Layout";
import { ProfileLayout } from "../../components/ProfileLayout";

export default function MyCourses() {
  return (
    <Layout footerHidden={true}>
      <ProfileLayout>My courses</ProfileLayout>
    </Layout>
  );
}
