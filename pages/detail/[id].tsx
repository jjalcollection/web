import { ContentsContainer, RecommendJJalContainer } from "@/containers";
import { BaseLayout } from "@/layouts/BaseLayout";
import React from "react";

const JjallDetail: NextPageWithLayout = () => {
  return (
    <div>
      <ContentsContainer />
      <RecommendJJalContainer />
    </div>
  );
};

JjallDetail.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default JjallDetail;
