import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import DoctorsList from './DoctorsList';
import CreateDoctor from './CreateDoctor';
import Login from './Login';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/doctors/list" component={DoctorsList} />
      <Route path="/doctors/add" component={CreateDoctor} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);
