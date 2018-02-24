import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

import ChatLayout from '../components/ChatLayout';

const Chat = (props) => {
  const submitMessage = async (text) => {
    const { mutate, match: { params: { patientId } } } = props;
    const refreshToken = Cookies.get('refreshToken');
    const refreshTokenData = jwtDecode(refreshToken);
    const doctorId = refreshTokenData.user.id;
    const response = await mutate({
      variables: { receiverId: patientId, senderId: doctorId, text },
    });
    console.log(response);
  };

  return <ChatLayout onSubmit={submitMessage} {...props} />;
};

Chat.propTypes = {
  mutate: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

const getAllPatientsQuery = gql`
  query {
    allPatients {
      user {
        id
        email
      }
    }
  }
`;

const sendMessage = gql`
  mutation($receiverId: Int!, $senderId: Int!, $text: String!) {
    createMessage(receiverId: $receiverId, senderId: $senderId, text: $text) {
      ok
    }
  }
`;

export default compose(graphql(getAllPatientsQuery), graphql(sendMessage))(Chat);
