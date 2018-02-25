import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, getContext } from 'recompose';
import PropTypes from 'prop-types';

import { Dialog } from './Dialog';

const getDialogQuery = gql`
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

export default compose(
  getContext({ interlocutorId: PropTypes.string }),
  graphql(getDialogQuery, {
    options: ({ interlocutorId }) => ({ variables: { receiverId: interlocutorId } }),
    props: ({ data: { loading, dialog } }) => ({
      loading,
      messages: dialog,
    }),
  }),
)(Dialog);
