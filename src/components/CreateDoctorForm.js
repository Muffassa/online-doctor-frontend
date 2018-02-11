import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CreateDoctorForm = ({
  values, handleChange, handleBlur, handleSubmit, className,
}) => (
  <div className={className}>
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
  </div>
);

CreateDoctorForm.defaultProps = {
  className: '',
};

CreateDoctorForm.propTypes = {
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
  className: PropTypes.string,
};

export default CreateDoctorForm;
