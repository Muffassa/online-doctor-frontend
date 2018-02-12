import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CreatePatientForm = ({
  values, handleChange, handleBlur, handleSubmit, className,
}) => (
  <div className={className}>
    <Header as="h1">Добавить пациента</Header>
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
  </div>
);

CreatePatientForm.defaultProps = {
  className: '',
};

CreatePatientForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CreatePatientForm;
