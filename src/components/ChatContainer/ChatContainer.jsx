import React from "react";
import { allowedChildren, getChildren } from "../utils";
import ConversationHeader from "../ConversationHeader";
import MessageList from "../MessageList";
import MessageInput from "../MessageInput";
import InputToolbox from "../InputToolbox";
import classNames from "classnames";
import { prefix } from "../settings";
import PropTypes from "prop-types";
import ChatSuggestions from "../ChatSuggestions/ChatSuggestions";
import MessageCountInfo from "../MessageCountInfo/MessageCountInfo";
export const ChatContainer = ({ children, className, ...rest }) => {
  const cName = `${prefix}-chat-container`;

  const [
    header,
    messageList,
    chatSuggestions,
    messageCountInfo,
    messageInput,
    inputToolbox,
  ] = getChildren(children, [
    ConversationHeader,
    MessageList,
    ChatSuggestions,
    MessageCountInfo,
    MessageInput,
    InputToolbox,
  ]);

  return (
    <>
      <div {...rest} className={classNames(cName, className)}>
        {header}
        {messageList}
        {chatSuggestions}
        {messageCountInfo}
        {messageInput}
        {inputToolbox}
      </div>
    </>
  );
};

ChatContainer.propTypes = {
  /**
   * Primary content.
   * Allowed elements:
   *
   * * &lt;ConversationHeader /&gt;
   * * &lt;MessageList /&gt;
   * * &lt;MessageInput /&gt;
   * * &lt;InputToolbox /&gt;
   */
  children: allowedChildren([
    ConversationHeader,
    MessageList,
    ChatSuggestions,
    MessageCountInfo,
    MessageInput,
    InputToolbox,
  ]),

  /** Additional classes. */
  className: PropTypes.string,
};

ChatContainer.defaultProps = {
  children: undefined,
};

export default ChatContainer;
