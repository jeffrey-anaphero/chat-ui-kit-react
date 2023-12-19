import React from "react";
import { prefix } from "../settings";
import { IoIosWarning } from "react-icons/io";
import classNames from "classnames";

const cName = `${prefix}-message-count-info`;
const cNameIcon = `${prefix}-message-count-info-icon`;
const cNameText = `${prefix}-message-count-info-text`;
const cNameUnderlined = `${prefix}-message-count-info-text-underlined`;

function MessageCountInfo({ className, messageCount, attemptLogin }) {
  return (
    <div className={classNames(cName, className)}>
      <IoIosWarning className={classNames(cNameIcon, className)} />
      <div className={classNames(cNameText, className)}>
        <strong>
          {messageCount <= 0 ? 0 : messageCount} messages remaining.
        </strong>{" "}
        To get more messages for free,{" "}
        <u
          onClick={attemptLogin}
          className={classNames(cNameUnderlined, className)}
        >
          sign up here!
        </u>
      </div>
    </div>
  );
}

export default MessageCountInfo;
