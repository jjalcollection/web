import { FindPasswordTemplate } from "@/components/find-password";
import { BaseLayout } from "@/layouts/BaseLayout";
import React from "react";

const FindPassword: NextPageWithLayout = () => {
  return (
    <div>
      <FindPasswordTemplate />
    </div>
  );
};

FindPassword.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default FindPassword;
