import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningMessage, setWarningMessage] = useState("");

  const handleOnChange = (e) => {
    let newText = e.target.value;
    newText = sanitizeText(newText);
    setText(newText);
  };

  // validation
  const sanitizeText = (text) => {
    if (text.includes("<script>")) {
      setWarningMessage("Script tag not allowed!");
      text = text.replace(/<script>/gi, "");
    } else if (text.includes("@")) {
      setWarningMessage("No @ symbol allowed!");
      text = text.replace(/@/gi, "");
    } else {
      setWarningMessage("");
    }
    return text;
  };

  return (
    <div className="textarea">
      <textarea
        name="text"
        value={text}
        spellCheck="false"
        placeholder="Enter your text here"
        wrap="hard"
        onChange={handleOnChange}
      />
      {warningMessage ? <Warning warningMessage={warningMessage} /> : null}
    </div>
  );
}
