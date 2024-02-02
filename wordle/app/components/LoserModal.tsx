import SeeNoEvilMonkey from "~/emojis/see-no-evil-monkey";
import ModalBase, { ModalBaseProps } from "./modal/ModalBase";

export default function LooserModal(props: ModalBaseProps) {
  return (
    <ModalBase
      {...props}
      heading="Oops! Tough Luck, But Don't Give Up!"
      icon={<SeeNoEvilMonkey />}
    >
      <p lang="en">
        You didn't quite make it this time, but hey, no worries! Give it another
        shot, and who knows, the next round might be your moment of glory! Keep
        going, champ!
        <span role="img" aria-label="Flexed Biceps Emoji">
          💪
        </span>
        <span role="img" aria-label="Video Game Emoji">
          🎮
        </span>
      </p>
    </ModalBase>
  );
}
