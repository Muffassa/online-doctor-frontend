import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import DoctorsList from './DoctorsList';
import CreateDoctor from './CreateDoctor';
import CreatePatient from './CreatePatient';
import Login from './Login';
import Chat from './Chat';
import PrivateRoute from './PrivateRoute';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/doctors/list" component={DoctorsList} />
      <Route path="/doctors/add" component={CreateDoctor} />
      <Route path="/patients/add" component={CreatePatient} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/chat/:interlocutorId?" component={Chat} />
    </div>
  </Router>
);
