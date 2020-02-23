/**
 * Notes Sagas
 */

// call, Select
import { put, takeLatest, all, call } from 'redux-saga/effects';
import request from 'utils/request';

import NotesActions, { ActionTypes } from './actions';

const apiUrl = 'api/mentor';

export function* handleNewNote(action) {
  const { text } = action.payload;
  yield put(NotesActions.newNoteAdded(text));
}

export function* LoadMentors(action) {
  const { location } = action.payload;
  if (location.pathname === '/') {
    const requestURL = `http://localhost:3001/${apiUrl}`;
    try {
      // Call our request helper (see 'utils/request')
      const mentors = yield call(request, requestURL);
      // yield put(FilmsActions.filmsDataLoaded(films));
    } catch (err) {
      console.log('error');
    }
  }
}
function* NotesSagas() {
  yield all([
    yield takeLatest(ActionTypes.NEW_NOTE, handleNewNote),
    yield takeLatest('@@router/LOCATION_CHANGE', LoadMentors),
  ]);
}

export default NotesSagas;
