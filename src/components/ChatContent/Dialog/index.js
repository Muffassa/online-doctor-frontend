import { graphql } from 'react-apollo';
import { compose, getContext, lifecycle } from 'recompose';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import jsCookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { getDialogQuery } from '../apollo/queries';
import { Dialog } from './Dialog';

const messagesSubscriptionQuery = gql`
  subscription($receiverId: Int!, $senderId: Int!) {
    newMessage(receiverId: $receiverId, senderId: $senderId) {
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
    props: ({ data: { loading, dialog, subscribeToMore } }) => ({
      loading,
      messages: dialog,
      subscribeToNewMessages: params =>
        subscribeToMore({
          document: messagesSubscriptionQuery,
          variables: {
            receiverId: params.receiverId,
            senderId: params.senderId,
          },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) {
              return prev;
            }

            const newFeedItem = subscriptionData.data.newMessage;

            return {
              ...prev,
              dialog: [...prev.dialog, newFeedItem],
            };
          },
        }),
    }),
  }),
  lifecycle({
    componentWillMount() {
      const { subscribeToNewMessages, interlocutorId } = this.props;
      const token = jsCookie.get('refreshToken');
      const { user: { id } } = jwtDecode(token);
      this.unsubscirbe = subscribeToNewMessages({
        receiverId: parseInt(interlocutorId, 10),
        senderId: id,
      });
    },
    componentWillReceiveProps(newProps) {
      if (this.props.interlocutorId === newProps.interlocutorId) {
        return;
      }

      const { subscribeToNewMessages, interlocutorId } = newProps;
      const token = jsCookie.get('refreshToken');
      const { user: { id } } = jwtDecode(token);
      if (this.unsubscirbe) {
        this.unsubscirbe();
      }
      this.unsubscribe = subscribeToNewMessages({
        receiverId: parseInt(interlocutorId, 10),
        senderId: id,
      });
    },
    componentWillUnmount() {
      this.unsubscirbe();
    },
  }),
)(Dialog);
