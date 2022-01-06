import { call, put, takeEvery } from 'redux-saga/effects';

import actions, { actionTypes } from 'src/actions';
import apiCalls from 'src/api/calls';

const toggleTheme = () => {
  put(actions.app.toggleTheme());
};

function* handleLoadAppStart(): {} {
  try {
    const { data: basicData } = yield call(apiCalls.getBasicData.call);
    yield put(actions.app.responseBasicData(basicData));
    const { data: msgs } = yield call(apiCalls.getMessages.call);
    yield put(actions.chat.storeMultipleMsgs(msgs));
    yield put(actions.app.loadAppDone());
  } catch (error) {
    console.log((error as any).message);
    // config.connectionId = '';
    // window.location.reload();
  }
}

const appSaga = function* root() {
  yield takeEvery(actionTypes.APP.TOGGLE_THEME, toggleTheme);
  yield takeEvery(actionTypes.APP.LOAD_APP_START, handleLoadAppStart);
};

export default appSaga;
