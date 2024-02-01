import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
} from "react-aria-components";
import { PropsWithChildren } from "react";
import * as ModalStyles from "~/styles/modal.css";
import { useNavigate } from "@remix-run/react";

export type ModalBaseProps = {
  isOpen: boolean;
  setOpen: () => void;
};

export default function ModalBase({
  isOpen,
  setOpen,
  children,
}: PropsWithChildren<ModalBaseProps>) {
  const navigate = useNavigate();
  return (
    <Modal
      isDismissable
      isOpen={isOpen}
      onOpenChange={setOpen}
      className={ModalStyles.modalOverlay}
    >
      <Dialog className={ModalStyles.modalDialog}>
        <Heading slot="title">Notice</Heading>
        <p>Click outside to close this dialog.</p>
        <div className={ModalStyles.modalContent}>{children}</div>
        <Button onPress={() => navigate("/")}>Try again</Button>
      </Dialog>
    </Modal>
  );
}
