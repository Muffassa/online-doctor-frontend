import { compose, getContext } from 'recompose';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { MessageInput } from './MessageInput';

const sendMessageMutation = gql`
  mutation($receiverId: Int!, $text: String!) {
    createMessage(receiverId: $receiverId, text: $text) {
      ok
    }
  }
`;

export default compose(
  graphql(sendMessageMutation, {
    props: ({ mutate }) => ({
      sendMessage: (text, receiverId) => mutate({ variables: { text, receiverId } }),
    }),
  }),
  getContext({ interlocutorId: PropTypes.string }),
  withFormik({
    mapPropsToValues: () => ({
      message: '',
    }),
    handleSubmit: async (values, { props: { sendMessage, interlocutorId } }) => {
      sendMessage(values.message, interlocutorId);
    },
  }),
)(MessageInput);
