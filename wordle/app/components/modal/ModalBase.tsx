import { Button, Dialog, Heading, Modal } from "react-aria-components";
import { PropsWithChildren, ReactNode } from "react";
import * as ModalStyles from "~/styles/modal.css";
import { buttonFullWidth } from "~/styles/button.css";

export type ModalBaseProps = {
  isOpen: boolean;
  heading: string;
  icon: ReactNode;
  onDismissModal: () => void;
  setOpen: () => void;
};

export default function ModalBase({
  isOpen,
  setOpen,
  heading,
  icon,
  onDismissModal,
  children,
}: PropsWithChildren<ModalBaseProps>) {
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
        <Button onPress={onDismissModal} className={buttonFullWidth}>
          Try again
        </Button>
      </Dialog>
    </Modal>
  );
}
