import { call, put, takeLatest } from 'redux-saga/effects';

import { LOAD_ALL, DELETE } from './reducer';
import { fetchPosts, deletePost } from './service';

function* loadAll() {
  try {
    const posts = yield call(fetchPosts);

    yield put({ type: `${LOAD_ALL}_SUCCESS`, posts });
  } catch (error) {
    yield put({ type: `${LOAD_ALL}_FAILURE`, error });
  }
}

function* deleteOne(action) {
  const { id } = action;

  try {
    yield call(deletePost, id);

    yield put({ type: `${DELETE}_SUCCESS`, id });
  } catch (error) {
    yield put({ type: `${DELETE}_FAILURE`, error });
  }
}

export default function* rootSaga() {
  yield takeLatest(LOAD_ALL, loadAll);
  yield takeLatest(DELETE, deleteOne);
}
