import React from 'react';
import { withFormik } from 'formik';
import { compose, graphql } from 'react-apollo';
import { Button, Form, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

const Login = ({
  values, handleChange, handleBlur, handleSubmit,
}) => (
  <Wrapper>
    <Form>
      <Header as="h1">Авторизация</Header>
      <Form.Field>
        <input
          name="email"
          type="email"
          placeholder="Эл. адрес"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Field>
      <Form.Field>
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Field>
      <Button onClick={handleSubmit}>Войти</Button>
    </Form>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
`;

Login.propTypes = {
  values: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        message
      }
    }
  }
`;

export default compose(
  graphql(loginMutation),
  withFormik({
    mapPropsToValues: () => ({
      email: '',
      password: '',
    }),
    handleSubmit: async (values, { props: { mutate } }) => {
      const response = await mutate({ variables: values });
      console.log(response);
    },
  }),
)(Login);
