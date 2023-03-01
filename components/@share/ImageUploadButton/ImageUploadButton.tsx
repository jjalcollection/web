import { Container } from "./ImageUploadButton.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ImageUploadButton = ({ ...rest }: Props) => {
  return (
    <button className={Container} {...rest}>
      짤 업로드
    </button>
  );
};
