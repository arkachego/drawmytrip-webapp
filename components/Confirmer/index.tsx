// Libraries
import { Modal, Button, Flex, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  message: string;
  opened: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
};
const Confirmer: React.FC<Props> = ({ message, opened, onConfirm, onClose }) => {

  const [ loading, { toggle } ] = useDisclosure();

  const onSubmit: () => void = async () => {
    toggle();
    await onConfirm();
    onClose();
    toggle();
  };

  return (
    <Modal
      withCloseButton={false}
      closeOnEscape={false}
      closeOnClickOutside={false}
      opened={opened}
      onClose={onClose}
      title="Confirmation"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Text
        mt="xs"
      >
        {message}
      </Text>
      <Flex mt="xl" justify="space-between">
        <Button
          disabled={loading}
          variant="default"
          onClick={onClose}
        >
          No
        </Button>
        <Button
          loading={loading}
          disabled={loading}
          color="red"
          onClick={onSubmit}
        >
          Yes
        </Button>
      </Flex>
    </Modal>
  );

};

export default Confirmer;
