import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import ChatContent from '../components/ChatContent';

const Chat = props => (
  <AppLayout className="app-layout">
    <SideBar />
    <Header className="header">Header</Header>
    <ChatContent {...props} />
  </AppLayout>
);

export const AppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
`;

export const Header = styled.div`
  grid-column: 2;
  grid-row: 1;
  background-color: #00999982;
  height: 60px;
`;

export default Chat;
