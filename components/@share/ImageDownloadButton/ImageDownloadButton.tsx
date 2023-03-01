import { Container } from "./ImageDownloadButton.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ImageDownloadButton = ({ children, ...rest }: Props) => {
  return (
    <button className={Container} {...rest}>
      {children}
    </button>
  );
};
