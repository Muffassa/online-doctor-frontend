import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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

export const PatientSideBar = graphql(getAllDoctors, {
  props: ({ data: { allDoctors } }) => ({
    users: allDoctors,
  }),
});

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

export const DoctorSideBar = graphql(getAllPatients, {
  props: ({ data: { allPatients } }) => ({
    users: allPatients,
  }),
  skip: true,
});
