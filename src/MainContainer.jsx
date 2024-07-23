import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";
import { FACEBOOK_CHAR_LIMIT, INSTAGRAM_CHAR_LIMIT } from "./constants";

export default function MainContainer() {
  const [text, setText] = useState("");

  const currentStats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    totalCharacters: text.length,
    instaCharactersLeft: INSTAGRAM_CHAR_LIMIT - text.length,
    facebookCharactersLeft: FACEBOOK_CHAR_LIMIT - text.length,
  };

  return (
    <main className="container">
      <TextArea setText={setText} text={text} />
      <Stats currentStats={currentStats} />
    </main>
  );
}
