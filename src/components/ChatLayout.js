import React, { Component } from 'react';
import styled from 'styled-components';
import { Header as HeaderText, Input as I, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Header,
  SideBar,
  AppLayout,
  Messages,
  MessageList,
  LeftMessage,
  RightMessage,
} from './chat';

export default class ChatLayout extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  changeMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  submitMessage = () => {
    this.props.onSubmit(this.state.message);
  };

  render() {
    const { data: { allPatients, loading }, match: { params: { patientId } } } = this.props;
    const { message } = this.state;

    return (
      <AppLayout className="app-layout">
        <SideBar className="channels">
          <HeaderText as="h3">Third Header</HeaderText>
          {!loading ? (
            <ul>
              {allPatients.map(patient => (
                <li key={patient.id}>
                  <Link to={`/chat/${patient.id}`} href={`/chat/${patientId}`}>
                    {patient.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            ''
          )}
        </SideBar>
        <Header className="header">{patientId}</Header>
        <Messages className="messages">
          <MessageList className="message-list">
            <LeftMessage>Сообщение 1</LeftMessage>
            <RightMessage>Сообщение 2</RightMessage>
          </MessageList>
        </Messages>
        <InputWrapper className="input" onSubmit={this.submitMessage}>
          <Input
            placeholder="Сообщение..."
            fluid
            size="big"
            value={message}
            onChange={this.changeMessage}
          />
        </InputWrapper>
      </AppLayout>
    );
  }
}

export const InputWrapper = styled(Form)`
  grid-column: 2;
  grid-row: 3;
`;

export const Input = styled(I)`
  width: 100%;
`;

ChatLayout.propTypes = {
  data: PropTypes.shape({
    allPatients: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
