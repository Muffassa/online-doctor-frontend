import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { SideBar } from './SideBar';

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

export default graphql(getAllPatients, {
  props: ({ data: { allPatients } }) => ({
    users: allPatients,
  }),
})(SideBar);
