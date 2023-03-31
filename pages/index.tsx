import { MainTemplate } from "@/components/main";
import { BaseLayout } from "@/layouts/BaseLayout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <MainTemplate />
    </>
  );
};

Home.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Home;
