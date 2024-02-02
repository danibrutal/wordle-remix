import Cup from "~/emojis/cup";
import ModalBase, { ModalBaseProps } from "./modal/ModalBase";

export default function WinnerModal(props: ModalBaseProps) {
  return (
    <ModalBase {...props} icon={<Cup />} heading="You're a Winner, Champ!">
      <p lang="en">
        Congrats! You've just crushed it and won the game. Now, bask in your
        glory and celebrate like a boss!{" "}
        <span role="img" aria-label="Party Popper Emoji">
          🎉
        </span>
      </p>
    </ModalBase>
  );
}
