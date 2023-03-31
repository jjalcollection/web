import { SignInTemplate } from "@/components/signin/SignInTemplate";
import { BaseLayout } from "@/layouts/BaseLayout";
import React from "react";

const SignIn: NextPageWithLayout = () => {
  return (
    <div>
      <SignInTemplate />
    </div>
  );
};

SignIn.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default SignIn;
