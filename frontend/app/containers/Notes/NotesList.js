/*
 * NotesList Component
 *
 */

import React from 'react';
import styled from 'styled-components';

const SingleNote = styled.div`
  display: flex;
  background-color: #ffdddd;
  border-left: 6px solid #f44336;
  padding: 5px;
  margin: 5px;
  width: 500px;
  height: 40px;
  align-items: center;
`;

export default ({ list }) => (
  <div>
    {Object.values(list).map((val,key) => (
      <SingleNote key={`${key}_note`}>{val}</SingleNote>
    ))}
  </div>
);
