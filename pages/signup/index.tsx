import { SignUpTemplate } from "@/components/signup";
import { BaseLayout } from "@/layouts/BaseLayout";
import React from "react";

const SignUp: NextPageWithLayout = () => {
  return (
    <div>
      <SignUpTemplate />
    </div>
  );
};

SignUp.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default SignUp;
