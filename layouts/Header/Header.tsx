import { ImageUploadFormModal } from "@/components/main/ImageUploadFormModal";
import { PersonIcon } from "@/icons";
import { Box, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { Container, Inner, Text } from "./Header.css";

export const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const router = useRouter();

  return (
    <>
      <header className={Container}>
        <div className={Inner}>
          <h1 onClick={() => router.push("/")} className={Text}>
            JJAL
          </h1>
          <Group>
            <Button onClick={toggle}>짤 업로드</Button>
            <Button onClick={() => router.push("/signin")} variant="outline">
              로그인
            </Button>
          </Group>
        </div>
      </header>

      <ImageUploadFormModal
        isOpen={opened}
        onToggleModal={toggle}
        close={close}
      />
    </>
  );
};
