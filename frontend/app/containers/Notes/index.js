/*
 * Notes
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import NotesList from './NotesList';

const Button = styled(Link)`
  margin-top: 50px;
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

const NewNoteContainer = styled.div`
  padding-bottom: 10px;
`;

const Notes = ({ list }) => (
  <Container>
    <NewNoteContainer>
      <Button to="new_note">NEW NOTE</Button>
    </NewNoteContainer>
    <div>
      <NotesList list={list} />
    </div>
  </Container>
);

function mapStateToProps(state) {
  const { notes } = state;
  return { list: notes.list };
}

export default connect(
  mapStateToProps,
  {},
)(Notes);
