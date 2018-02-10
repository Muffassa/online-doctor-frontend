import React from 'react';
import { withFormik } from 'formik';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

const CreateDoctor = ({
  values, handleChange, handleBlur, handleSubmit,
}) => (
  <form>
    <input
      name="name"
      placeholder="Имя"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <input
      name="familyName"
      placeholder="Фамилия"
      value={values.familyName}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <input
      name="patronymic"
      placeholder="Отчество"
      value={values.patronymic}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <input
      name="speciality"
      placeholder="Специальность"
      value={values.speciality}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <input
      name="email"
      type="email"
      placeholder="Эл. адрес"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <input
      name="password"
      type="password"
      placeholder="Пароль"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <button onClick={handleSubmit}>Сохранить</button>
  </form>
);

CreateDoctor.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    familyName: PropTypes.string,
    patronymic: PropTypes.string,
    speciality: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const createDoctorMutation = gql`
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
