import PropTypes from 'prop-types';

export default {
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
