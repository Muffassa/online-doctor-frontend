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
  mutation(
    $name: String!
    $familyName: String!
    $patronymic: String!
    $speciality: String!
    $email: String!
    $password: String!
  ) {
    createDoctor(
      name: $name
      familyName: $familyName
      patronymic: $patronymic
      speciality: $speciality
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

export default compose(
  graphql(createDoctorMutation),
  withFormik({
    mapPropsToValues: () => ({
      name: '',
      familyName: '',
      patronymic: '',
      speciality: '',
      email: '',
      password: '',
    }),
    handleSubmit: async (values, { props: { mutate, history } }) => {
      await mutate({ variables: values });
      history.push('/doctors/list');
    },
  }),
)(CreateDoctor);
