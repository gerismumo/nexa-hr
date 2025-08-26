import { IconTrash } from "@tabler/icons-react";
import ActionLayout from "./ActionLayout";
import { Button, Text } from "@mantine/core";
import { useState } from "react";
import toast from "react-hot-toast";

interface DeleteLayoutProps {
  title?: string;
  info?: string;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string;
  btnLeftIcon?: React.ReactNode;
  btnText?: string;
  btnType?: "filled" | "outline" | "transparent";
  onConfirm: () => Promise<void> | void;
  onSuccess?: () => void;
}

const DeleteMenu: React.FC<
  Omit<DeleteLayoutProps, "btnLeftIcon" | "btnText" | "btnType" | "title"> & {
    onClose?: () => void;
  }
> = ({
  info = "Are you sure you want to delete this content?",
  confirmText = "Delete",
  cancelText = "Cancel",
  confirmColor = "red",
  onConfirm,
  onClose,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm();
      // toast.success("Deleted successfully");
      onSuccess?.();
      onClose?.();
    } catch (err) {
      toast.error("Failed to delete");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    toast.success("Delete cancelled");
    onClose?.();
  };

  return (
    <div className="flex flex-col gap-4">
      <Text>{info}</Text>
      <div className="flex flex-row justify-around">
        <Button size="xs" variant="outline" onClick={handleCancel} disabled={loading}>
          {cancelText}
        </Button>
        <Button
          size="xs"
          color={confirmColor}
          loading={loading}
          onClick={handleConfirm}
        >
          {confirmText}
        </Button>
      </div>
    </div>
  );
};

const DeleteLayout: React.FC<DeleteLayoutProps> = ({
  title = "Delete",
  btnLeftIcon = <IconTrash size={16} />,
  btnText = "Delete",
  btnType = "transparent",
  ...props
}) => {
  return (
    <ActionLayout
      btnLeftIcon={btnLeftIcon}
      btnText={btnText}
      btnType={btnType}
      title={title}
    >
      <DeleteMenu {...props} />
    </ActionLayout>
  );
};

export default DeleteLayout;
