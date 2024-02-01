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
  return json({ word: await getRandomWord() });
};

export default function Index() {
  const { word } = useLoaderData<typeof loader>();

  return (
    <div className={appStyle}>
      <WordleGame secretWord={word} attemps={5} />
    </div>
  );
}
