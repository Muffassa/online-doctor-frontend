import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jsCookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

const isAuthenticated = () => {
  try {
    jwtDecode(jsCookie.get('refreshToken'));
    return true;
  } catch (e) {
    return false;
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

PrivateRoute.defaultProps = {
  location: '',
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  location: PropTypes.string,
};

export default PrivateRoute;
