/*
 *
 * Notes Reducer
 *
 */

import { ActionTypes } from './actions';

/* eslint-disable default-case, no-param-reassign */

export const initialState = {
  list: {
    1: 'sample text 1',
    2: 'sampple text 2',
  },
};

const getKey = list => {
  const l = Object.keys(list).map(val => parseInt(val));
  return Math.max(...l);
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.NEW_NOTE_ADDED: {
      const { text } = action.payload;
      const m = getKey(state.list);
      return {
        ...state,
        list: {
          ...state.list,
          [m + 1]: text,
        },
      };
    }
    default:
      return state;
  }
}
