import { ImageUploadButton } from "@/components/@share";
import { Container, Inner, Text } from "./Header.css";

export const Header = () => {
  return (
    <header className={Container}>
      <div className={Inner}>
        <h1 className={Text}>JJAL</h1>
        <ImageUploadButton />
      </div>
    </header>
  );
};
