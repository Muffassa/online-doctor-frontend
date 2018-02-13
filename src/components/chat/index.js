import styled from 'styled-components';

export const AppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
`;

export const SideBar = styled.div`
  grid-column: 1;
  grid-row: 1/4;
  background-color: #36bdb2;
`;

export const Header = styled.div`
  grid-column: 2;
  grid-row: 1;
  background-color: #00999982;
  height: 60px;
`;

export const Messages = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: #e8e7e7;
`;

export const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 50px 50px;
`;

export const MessageBox = styled.li`
  padding: 15px 20px;
  max-width: 50%;
  border-radius: 4px;
  background-color: white;
`;

export const LeftMessage = styled(MessageBox)`
  align-self: flex-start;
`;

export const RightMessage = styled(MessageBox)`
  align-self: flex-end;
`;
