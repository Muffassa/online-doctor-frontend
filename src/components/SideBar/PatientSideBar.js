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
