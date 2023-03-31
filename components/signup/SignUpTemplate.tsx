import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import Link from "next/link";

export function SignUpTemplate() {
  return (
    <Container size={420} my={40}>
      <Title align="center">회원가입</Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        이미 회원이신가요 ?{" "}
        <Anchor size="sm" component={Link} href="/signin">
          로그인 하기
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="이메일" placeholder="you@jjal.com" required />
        <PasswordInput
          label="비밀번호"
          placeholder="password"
          required
          mt="md"
        />
        <PasswordInput
          label="비밀번호 확인"
          placeholder="password"
          required
          mt="md"
        />

        <Button fullWidth mt="xl">
          회원가입
        </Button>
      </Paper>
    </Container>
  );
}
