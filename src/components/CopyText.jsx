import { CopyIcon } from "@radix-ui/react-icons";

export default function CopyText({ text }) {
  const handleClick = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button className="btn-copy-text" onClick={() => handleClick(text)}>
      <CopyIcon className="copy-icon" />
    </button>
  );
}
