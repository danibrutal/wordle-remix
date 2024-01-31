import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import WordleGame from "~/components/wordle.game";
import { getRandomWord } from "~/models/words.api";

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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>My index is clean! {word}</h1>
      <WordleGame word={word} attemps={5} />
    </div>
  );
}
