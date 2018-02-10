import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const DoctorsList = ({ data: { allDoctors, loading } }) => (
  <div>
    {loading ? (
      <div>loading</div>
    ) : (
      <div>
        <div>Doctors List</div>
        <ul>{allDoctors.map(({ name, id }) => <li key={id}>{name}</li>)}</ul>
      </div>
    )}
  </div>
);

DoctorsList.propTypes = {
  data: PropTypes.shape({
    allDoctors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    loading: PropTypes.bool,
  }).isRequired,
};

const getAllDoctors = gql`
  query {
    allDoctors {
      id
      name
    }
  }
`;
export default graphql(getAllDoctors)(DoctorsList);
