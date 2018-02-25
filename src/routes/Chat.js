import React from 'react';
import { Header, AppLayout } from '../components/chat';
import SideBar from '../components/SideBar';
import ChatContent from '../components/ChatContent';

const Chat = props => (
  <AppLayout className="app-layout">
    <SideBar />
    <Header className="header">Header</Header>
    <ChatContent {...props} />
  </AppLayout>
);

export default Chat;
