import ModalBase, { ModalBaseProps } from "./modal/ModalBase";

export default function LooserModal(props: ModalBaseProps) {
  return (
    <ModalBase {...props}>
      <h3>You have lost!</h3>
    </ModalBase>
  );
}
