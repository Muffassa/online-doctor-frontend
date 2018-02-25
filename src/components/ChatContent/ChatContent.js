import React, { Fragment } from 'react';
import MessageInput from './MessageInput';
import Dialog from './Dialog';

export const ChatContent = () => (
  <Fragment>
    <Dialog />
    <MessageInput />
  </Fragment>
);
