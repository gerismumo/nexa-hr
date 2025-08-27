import { Button, Center, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Center h="100vh">
      <Stack align="center" gap="sm">
        <Title order={2} c="red">
          404
        </Title>
        <Text c="dimmed">Oops! The page you’re looking for doesn’t exist.</Text>
        <Button component={Link} to="/" variant="light">
          Go back home
        </Button>
      </Stack>
    </Center>
  );
};

export default NotFound;
