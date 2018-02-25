import { compose, getContext } from 'recompose';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { getDialogQuery } from '../apollo/queries';
import { MessageInput } from './MessageInput';

const sendMessageMutation = gql`
  mutation($receiverId: Int!, $text: String!) {
    createMessage(receiverId: $receiverId, text: $text) {
      created_at
      id
      receiverId
      senderId
      text
    }
  }
`;

export default compose(
  getContext({ interlocutorId: PropTypes.string }),
  graphql(sendMessageMutation, {
    props: ({ mutate }) => ({
      sendMessage: (text, receiverId) =>
        mutate({
          variables: { text, receiverId },
          update: (proxy, { data: { createMessage } }) => {
            const data = proxy.readQuery({
              query: getDialogQuery,
              variables: { receiverId },
            });

            data.dialog.push(createMessage);

            proxy.writeQuery({ query: getDialogQuery, data, variables: { receiverId } });
          },
        }),
    }),
  }),
  withFormik({
    mapPropsToValues: () => ({
      message: '',
    }),
    handleSubmit: async (values, { props: { sendMessage, interlocutorId }, resetForm }) => {
      await sendMessage(values.message, interlocutorId);
      resetForm();
    },
  }),
)(MessageInput);
