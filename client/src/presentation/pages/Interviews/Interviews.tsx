import { Flex, Stack, Title } from "@mantine/core";
import List from "./List";
import { mockInterviews } from "../../../mockdata/interview";
import ActionLayout from "../../components/ActionLayout";
import Add from "./Add";

const Interviews = () => {
  return (
    <Stack gap="md">
      <Flex justify="space-between" align="center" px="md">
        <Title order={2} mb="md" style={{ flexGrow: 1 }}>
          Interviews List
        </Title>
        <ActionLayout title="" btnText="Add" size="lg">
          <Add />
        </ActionLayout>
      </Flex>
      <List data={mockInterviews} />
    </Stack>
  );
};

export default Interviews;
