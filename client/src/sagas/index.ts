import { all } from 'redux-saga/effects';

import appSaga from './app';
import chatSaga from './chat';

const rootSaga = function* root() {
  yield all([chatSaga(), appSaga()]);
};

export default rootSaga;
