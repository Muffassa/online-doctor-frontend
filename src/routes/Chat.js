import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

import ChatLayout from '../components/ChatLayout';

const Chat = (props) => {
  const submitMessage = (text) => {
    const { mutate, match: { params: { patientId } } } = props;
    const refreshToken = Cookies.get('refreshToken');
    const refreshTokenData = jwtDecode(refreshToken);
    const doctorId = refreshTokenData.user.id;
    mutate({ variables: { patientId, doctorId, text } });
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
      id
      name
    }
  }
`;

const sendMessage = gql`
  mutation($doctorId: Int!, $patientId: Int!, $text: String!) {
    createMessage(doctorId: $doctorId, patientId: $patientId, text: $text) {
      id
    }
  }
`;

export default compose(graphql(getAllPatientsQuery), graphql(sendMessage))(Chat);
