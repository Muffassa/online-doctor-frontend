import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <ul>
    <li>
      <Link to="/doctors/list" href="/doctors/list">
        Doctors List
      </Link>
    </li>
    <li>
      <Link to="/doctors/add" href="/doctors/list">
        Doctors Add
      </Link>
    </li>
    <li>
      <Link to="/login" href="/login">
        Login
      </Link>
    </li>
  </ul>
);
