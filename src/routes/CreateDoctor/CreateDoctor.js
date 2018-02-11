import React from 'react';
import { withFormik } from 'formik';
import { graphql, compose } from 'react-apollo';
import { Button, Form, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import PropTypes from './PropTypes';
import { createDoctorMutation } from './actions';

const CreateDoctor = ({
  values, handleChange, handleBlur, handleSubmit,
}) => (
  <Wrapper>
    <Header as="h1">Добавить доктора</Header>
    <Form>
      <Form.Field>
        <input
          name="name"
          placeholder="Имя"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Field>
      <Form.Field>
        <input
          name="familyName"
          placeholder="Фамилия"
          value={values.familyName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Field>
      <Form.Field>
        <input
          name="patronymic"
          placeholder="Отчество"
          value={values.patronymic}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Field>
      <Form.Field>
        <input
          name="speciality"
          placeholder="Специальность"
          value={values.speciality}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Field>
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
      <Button onClick={handleSubmit}>Сохранить</Button>
    </Form>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
`;

CreateDoctor.propTypes = PropTypes;

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
