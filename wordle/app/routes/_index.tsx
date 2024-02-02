import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import WordleGame from "~/components/WordleGame";
import { getRandomWord } from "~/models/words.api";
import { appStyle } from "~/styles/styles.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Wordle Game!" },
    { name: "description", content: "Wordle game developed in Remix" },
  ];
};

export const loader = async () => {
  return json({ secretWord: await getRandomWord() });
};

export default function Index() {
  const { secretWord } = useLoaderData<typeof loader>();

  return (
    <div className={appStyle}>
      <h1>{secretWord}</h1>
      <WordleGame secretWord={secretWord} attemps={5} />
    </div>
  );
}
