import ModalBase, { ModalBaseProps } from "./modal/ModalBase";

export default function WinnerModal(props: ModalBaseProps) {
  return (
    <ModalBase {...props}>
      <h3>You have won!</h3>
    </ModalBase>
  );
}
