import React from 'react';
import { Header as HeaderText } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  grid-column: 1;
  grid-row: 1/4;
  background-color: #36bdb2;
`;

export const SideBar = ({ users }) => (
  <SideBarWrapper className="channels">
    <HeaderText as="h3">Third Header</HeaderText>
    <ul>
      {users.map(({ user: { id, email } }) => (
        <li key={id}>
          <Link to={`/chat/${id}`} href={`/chat/${id}`}>
            {email}
          </Link>
        </li>
      ))}
    </ul>
  </SideBarWrapper>
);

SideBar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
  })),
};

SideBar.defaultProps = {
  users: [],
};
