import type { ComponentType, ReactElement, ReactNode } from "react";

import type { NextPage } from "next";

declare global {
  type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
    getLayout?: (_page: ReactElement<P>) => ReactNode;
    layout?: ComponentType;
  };
}

export {};
