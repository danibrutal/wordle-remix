import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
} from "react-aria-components";
import { PropsWithChildren, ReactNode } from "react";
import * as ModalStyles from "~/styles/modal.css";
import { buttonFullWidth } from "~/styles/button.css";
import { useNavigate } from "@remix-run/react";

export type ModalBaseProps = {
  isOpen: boolean;
  setOpen: () => void;
  heading: string;
  icon: ReactNode;
};

export default function ModalBase({
  isOpen,
  setOpen,
  heading,
  icon,
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
        <figure className={ModalStyles.modalFigure}>{icon}</figure>
        <Heading slot="title" className={ModalStyles.modalHeading}>
          {heading}
        </Heading>
        <div className={ModalStyles.modalContent}>{children}</div>
        <Button
          onPress={() => navigate("/", { replace: true })}
          className={buttonFullWidth}
        >
          Try again
        </Button>
      </Dialog>
    </Modal>
  );
}
