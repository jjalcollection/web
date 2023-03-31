import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import Link from "next/link";

export function SignInTemplate() {
  return (
    <Container size={420} my={40}>
      <Title align="center">로그인</Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        아직 회원이 아니신가요 ?{" "}
        <Anchor size="sm" component={Link} href="/signup">
          회원가입 하기
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
        <Group position="apart" mt="lg">
          <Checkbox label="저장하기" />
          <Anchor component={Link} href="/find-password" size="sm">
            비밀번호 찾기
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          로그인
        </Button>
      </Paper>
    </Container>
  );
}
