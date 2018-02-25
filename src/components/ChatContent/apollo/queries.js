import gql from 'graphql-tag';

export const getDialogQuery = gql`
  query($receiverId: Int!) {
    dialog(receiverId: $receiverId) {
      id
      text
      receiverId
      senderId
      created_at
    }
  }
`;
