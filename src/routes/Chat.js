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

const sendMessage = gql`
  mutation($receiverId: Int!, $senderId: Int!, $text: String!) {
    createMessage(receiverId: $receiverId, senderId: $senderId, text: $text) {
      ok
    }
  }
`;

const getAllPatientsAndMessages = gql`
  query($doctorId: Int!, $patientId: Int!) {
    dialog(doctorId: $doctorId, patientId: $patientId) {
      id
      text
      receiverId
      senderId
      created_at
    }
    allPatients {
      user {
        id
        email
      }
    }
  }
`;

export default compose(
  graphql(sendMessage),
  graphql(getAllPatientsAndMessages, {
    options: (props) => {
      const { match: { params: { patientId } } } = props;
      const refreshToken = Cookies.get('refreshToken');
      const refreshTokenData = jwtDecode(refreshToken);
      const doctorId = refreshTokenData.user.id;
      return { variables: { doctorId, patientId } };
    },
  }),
)(Chat);
