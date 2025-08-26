import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import React from "react";

const ActionLayout = ({
  children,
  title,
  btnText,
  btnType,
  btnLeftIcon,
  size

}: {
  children: React.ReactElement<{ onClose?: () => void }>;
  title?: string;
  btnText: string;
  btnType?: string;
  size?:string
  btnLeftIcon?: React.ReactNode;
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title={title} centered size={size ? size:'md'}>
        {React.cloneElement(children, { onClose: close })}
      </Modal>

      <Button
        leftSection={btnLeftIcon}
        variant={btnType ? btnType : "light"}
        onClick={open}
        size="xs"
      >
        {btnText}
      </Button>
    </>
  );
};

export default ActionLayout;
