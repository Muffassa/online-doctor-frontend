// TODO: Разделить чат лэйаут на:
// 1. Блок с диалогом
// 2. Инпутом для ввода сообщения
// 3. Сайдбаром со списком пользователей
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
      text: '',
    };
  }

  changeMessage = (e) => {
    this.setState({ text: e.target.value });
  };

  submitMessage = () => {
    this.props.onSubmit(this.state.text);
  };

  renderMessage = (message) => {
    const { match: { params: { patientId } } } = this.props;

    return message.senderId === patientId ? (
      <LeftMessage key={message.id}>{message.text}</LeftMessage>
    ) : (
      <RightMessage key={message.id}>{message.text}</RightMessage>
    );
  };

  render() {
    const { data: { allPatients, dialog }, match: { params: { patientId } } } = this.props;
    const { text } = this.state;

    return (
      <AppLayout className="app-layout">
        <SideBar className="channels">
          <HeaderText as="h3">Third Header</HeaderText>
          {allPatients ? (
            <ul>
              {allPatients.map(({ user: { id, email } }) => (
                <li key={id}>
                  <Link to={`/chat/${id}`} href={`/chat/${id}`}>
                    {email}
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
            {dialog ? dialog.map(message => this.renderMessage(message)) : ''}
          </MessageList>
        </Messages>
        <InputWrapper className="input" onSubmit={this.submitMessage}>
          <Input
            placeholder="Сообщение..."
            fluid
            size="big"
            value={text}
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
    dialog: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      receiverId: PropTypes.number,
      senderId: PropTypes.number,
      created_at: PropTypes.string,
    })),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      patientId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
