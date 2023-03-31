import { FC, PropsWithChildren } from "react";
import { Header } from "./Header";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
