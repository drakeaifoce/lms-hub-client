import { Send } from "feather-icons-react/build/IconComponents";
import { Layout } from "../../components/Layout";
import { ProfileLayout } from "../../components/ProfileLayout";
import { TextArea } from "../../components/primitives/TextArea";
import { Button } from "../../components/primitives/Button";
export default function SupportService() {
  return (
    <Layout footerHidden={true}>
      <ProfileLayout> 
        <div className="flex min-h-full flex-col gap-8">
          <article className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium text-black-100">Мои куры</h1>
            <p className="text-sm font-normal text-black-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </article>
          <form className="flex flex-col gap-6 w-full md:w-1/2">
            <TextArea name="message" placeholder={"Ваше обращение"}/>
            <Button variant="primary" className="flex flex-row justify-center items-center gap-2 w-full sm:w-fit font-medium" type="submit">
              <Send size={14}/>
              <span>
                Отправить
              </span>
            </Button>
          </form>
        </div>
        </ProfileLayout>
    </Layout>
  );
}
