import React from 'react';
import { Form, Input as I } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const MessageInput = ({
  values, handleChange, handleBlur, handleSubmit,
}) => (
  <InputWrapper className="input" onSubmit={handleSubmit}>
    <Input
      placeholder="Сообщение..."
      name="message"
      fluid
      size="big"
      value={values.message}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  </InputWrapper>
);

MessageInput.propTypes = {
  values: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const Input = styled(I)`
  width: 100%;
`;

const InputWrapper = styled(Form)`
  grid-column: 2;
  grid-row: 3;
`;
