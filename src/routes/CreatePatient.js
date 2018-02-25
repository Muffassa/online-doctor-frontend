import { withFormik } from 'formik';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CreatePatientForm } from '../components';

const CreatePatient = styled(CreatePatientForm)`
  max-width: 600px;
  margin: 50px auto;
`;

export const createPatientMutation = gql`
  mutation($age: Int!, $email: String!, $password: String!) {
    addPatient(age: $age, email: $email, password: $password) {
      data {
        id
      }
    }
  }
`;

export default compose(
  graphql(createPatientMutation),
  withFormik({
    mapPropsToValues: () => ({
      age: null,
      email: '',
      password: '',
    }),
    handleSubmit: async (values, { props: { mutate } }) => {
      await mutate({ variables: values });
      // history.push('/doctors/list');
    },
  }),
)(CreatePatient);
