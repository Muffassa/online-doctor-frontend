import styled from 'styled-components';

export const Messages = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: #e8e7e7;
  overflow-y: scroll;
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
  margin-bottom: 20px;
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
