import { useIsomorphicEffect } from "@/hooks";
import type { ReactNode, ReactPortal } from "react";
import React, { useRef, useState } from "react";

import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  target?: HTMLElement | string;
  className?: string;
}

export const Portal = (props: PortalProps): ReactPortal | null => {
  const { children, className, target } = props;

  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    setMounted(true);
    ref.current = !target
      ? document.createElement("div")
      : typeof target === "string"
      ? document.querySelector(target)
      : target;

    if (!target) {
      document.body.appendChild(ref.current!);
    }

    return () => {
      !target && document.body.removeChild(ref.current!);
    };
  }, [target]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className={className}>{children}</div>,
    ref.current!
  );
};
