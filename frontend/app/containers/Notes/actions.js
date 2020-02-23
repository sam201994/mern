export const ActionTypes = {
  NEW_NOTE: 'container/NEW_NOTE',
  NEW_NOTE_ADDED: 'container/NEW_NOTE_ADDED',
};

const newNote = text => ({
  type: ActionTypes.NEW_NOTE,
  payload: {
    text,
  },
});

const newNoteAdded = text => ({
  type: ActionTypes.NEW_NOTE_ADDED,
  payload: {
    text,
  },
});

export default {
  newNote,
  newNoteAdded,
};
