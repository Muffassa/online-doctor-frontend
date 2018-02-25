import React, { Fragment } from 'react';
import { Messages, MessageList, LeftMessage, RightMessage } from '../chat';
import MessageInput from './MessageInput';

export const ChatContent = () => (
  <Fragment>
    <Messages className="messages">
      <MessageList className="message-list" />
    </Messages>
    <MessageInput />
  </Fragment>
);
