// import react:
import React from "react";
// import Button:
import Button from "../Buttons/Button";
import classNames from "classnames";
import { prefix } from "../settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cName = `${prefix}-chat-suggestions`;
const cNameButton = `${prefix}-chat-suggestions-button`;

function ChatSuggestions({ className, handleUserMessage }) {
  const handleButtonClick = (e) => {
    handleUserMessage(e.target.value);
  };
  return (
    <div className={classNames(cName, className)}>
      <Button
        onClick={handleButtonClick}
        value="Help me with a diagnosis"
        border={true}
        className={classNames(cNameButton, className)}
      >
        Help me with a diagnosis
      </Button>
      <Button
        onClick={handleButtonClick}
        value="Help me evaluate lab results"
        border={true}
        className={classNames(cNameButton, className)}
      >
        Help me evaluate lab results
      </Button>
      <Button
        onClick={handleButtonClick}
        value="Help me with a clinical plan"
        border={true}
        className={classNames(cNameButton, className)}
      >
        Help me with a clinical plan
      </Button>
      <Button
        onClick={handleButtonClick}
        value="Help me with medication selection"
        border={true}
        className={classNames(cNameButton, className)}
      >
        Help me with medication selection
      </Button>
    </div>
  );
}

export default ChatSuggestions;
