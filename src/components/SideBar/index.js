import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import jwtDecode from 'jwt-decode';
import jsCookie from 'js-cookie';
import { withProps } from 'recompose';

import { SideBar } from './SideBar';

const getAllDoctors = gql`
  query {
    allDoctors {
      user {
        id
        email
      }
    }
  }
`;

const getAllPatients = gql`
  query {
    allPatients {
      user {
        id
        email
      }
    }
  }
`;

const getUserRole = () => {
  const token = jsCookie.get('refreshToken');
  const { user: { role } } = jwtDecode(token);
  return role;
};

export default compose(
  withProps(() => ({
    userRole: getUserRole(),
  })),
  graphql(getAllPatients, {
    props: ({ data: { allPatients } }) => ({
      users: allPatients,
    }),
    skip: props => props.userRole !== 'doctor',
  }),
  graphql(getAllDoctors, {
    props: ({ data: { allDoctors } }) => ({
      users: allDoctors,
    }),
    skip: props => props.userRole !== 'patient',
  }),
)(SideBar);
