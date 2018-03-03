import React from 'react';
import PropTypes from 'prop-types';
import { Messages, MessageList, LeftMessage, RightMessage } from './components';

export const Dialog = ({ messages, interlocutorId }) => {
  const renderMessage = message =>
    (message.senderId === parseInt(interlocutorId, 10) ? (
      <LeftMessage key={message.id}>{message.text}</LeftMessage>
    ) : (
      <RightMessage key={message.id}>{message.text}</RightMessage>
    ));

  return (
    <Messages className="messages">
      <MessageList className="message-list">{messages.map(renderMessage)}</MessageList>
    </Messages>
  );
};

Dialog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    receiverId: PropTypes.number,
    senderId: PropTypes.number,
    created_at: PropTypes.string,
  })),
  interlocutorId: PropTypes.string.isRequired,
};

Dialog.defaultProps = {
  messages: [],
};
