// import react:
import React from "react";
// import Button:
import Button from "../Buttons/Button";
import classNames from "classnames";
import { prefix } from "../settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cName = `${prefix}-chat-suggestions`;
const cNameButton = `${prefix}-chat-suggestions-button`;

function ChatSuggestions({ className, handleUserMessage, suggestions = [] }) {
  const handleButtonClick = (e) => {
    handleUserMessage(e.target.value);
  };

  const suggestionsListReact =
    suggestions.length > 0
      ? suggestions.map((suggestedQuestion, i) => (
          <Button
            key={i}
            onClick={handleButtonClick}
            value={suggestedQuestion}
            border={true}
            className={classNames(cNameButton, className)}
          >
            {suggestedQuestion}
          </Button>
        ))
      : null;
  return (
    <>
      {suggestions.length > 0 && (
        <div className={classNames(cName, className)}>
          {suggestionsListReact}
        </div>
      )}
    </>
  );
}

export default ChatSuggestions;
