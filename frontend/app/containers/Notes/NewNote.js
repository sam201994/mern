/*
 * NewNote Component
 *
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import NotesActions from './actions';

const Button = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: #ffdddd;
  padding: 5px;
  width: 100px;
  height: 40px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  text-decoration: none;
  color: #e88888;
  &:hover {
    background-color: #f3dfdf;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 100px;
`;

const InputContainer = styled.div`
  margin-top: 50px;
  display: flex;
  input {
    width: 500px;
    height: 35px;
    text-indent: 5px;
  }
`;

class NewNote extends Component {
  state = {
    text: '',
  };

  handleOnSubmit = () => {
    const { text } = this.state;
    const { actions } = this.props;
    if (text) {
      actions.newNote(text);
      this.props.history.push('/');
    }
  };

  onInputChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <Container>
        <InputContainer>
          <input onChange={this.onInputChange} type="text" />
        </InputContainer>
        <Button onClick={this.handleOnSubmit}>Create</Button>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      newNote: NotesActions.newNote,
    },
    dispatch,
  ),
});

export default connect(
  null,
  mapDispatchToProps,
)(NewNote);
