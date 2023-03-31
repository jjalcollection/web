import { ImageUploadButton } from "@/components/@share";
import { ImageUploadFormModal } from "@/components/main/ImageUploadFormModal";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Inner, Text } from "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => setIsOpen(!isOpen);
  const router = useRouter();

  return (
    <>
      <header className={Container}>
        <div className={Inner}>
          <h1 onClick={() => router.push("/")} className={Text}>
            JJAL
          </h1>
          <Button onClick={onToggleModal}>짤 업로드</Button>
        </div>
      </header>

      <ImageUploadFormModal isOpen={isOpen} onToggleModal={onToggleModal} />
    </>
  );
};
