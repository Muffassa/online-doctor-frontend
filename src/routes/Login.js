import React from 'react';
import { withFormik } from 'formik';
import { compose } from 'react-apollo';
import { Button, Form, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CreateDoctor = ({
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

CreateDoctor.propTypes = {
  values: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default compose(withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  handleSubmit: async (values) => {
    console.log(values);
    // await mutate({ variables: values });
    // history.push('/doctors/list');
  },
}))(CreateDoctor);
