import { ReactNode, useEffect } from "react";
import { Portal } from "../Portal";
import { Container, Inner, Overlay } from "./Modal.css";

interface ModalInnerStyle {
  width: number;
  height: number;
  isModal: boolean;
}

interface ModalProps extends ModalInnerStyle {
  children: ReactNode;
  className?: string;
  onToggleModal: () => void;
}

export function Modal({
  width,
  height,
  isModal,
  children,
  className,
  onToggleModal,
  ...rest
}: ModalProps) {
  useEffect(() => {
    if (isModal) window.document.body.style.overflow = "hidden";
    return () => {
      window.document.body.style.overflow = "unset";
    };
  }, [isModal]);

  return (
    <Portal>
      <div className={Container} onMouseDown={onToggleModal} {...rest}>
        <div
          className={Inner}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        <div className={Overlay} />
      </div>
    </Portal>
  );
}
