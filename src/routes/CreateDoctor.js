import { withFormik } from 'formik';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CreateDoctorForm } from '../components';

const CreateDoctor = styled(CreateDoctorForm)`
  max-width: 600px;
  margin: 50px auto;
`;

export const createDoctorMutation = gql`
  mutation($speciality: String!, $email: String!, $password: String!) {
    addDoctor(speciality: $speciality, email: $email, password: $password) {
      ok
      error {
        message
      }
    }
  }
`;

export default compose(
  graphql(createDoctorMutation),
  withFormik({
    mapPropsToValues: () => ({
      speciality: '',
      email: '',
      password: '',
    }),
    handleSubmit: async (values, { props: { mutate, history } }) => {
      const response = await mutate({ variables: values });
      const { data: { addDoctor: { ok, error: message } } } = response;
      if (ok) {
        history.push('/doctors/list');
      } else {
        console.log(message);
      }
    },
  }),
)(CreateDoctor);
