import { Locale, Word } from "~/types";

export async function getRandomWord(
  lang: Locale = Locale.EN,
  length: number = 5,
): Promise<Word> {
  const response = await fetch(
    `https://random-word-api.herokuapp.com/word?lang=${lang}&length=${length}`,
  );

  try {
    const jsonResponse = await response.json();
    const word = jsonResponse.pop();

    if (typeof word === "undefined") {
      throw new Error("API Server down!");
    }

    return word;
  } catch (e) {
    throw e;
  }
}
