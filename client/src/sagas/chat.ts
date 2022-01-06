import { put, takeEvery, call } from 'redux-saga/effects';

import actions from 'src/actions';
import * as types from 'src/actions/actionTypes';
import apiCalls from 'src/api/calls';
import { wait } from 'src/util';

const handleIncomingMsg = (data: ReturnType<typeof actions.chat.storeSingleMsg>) => {
  put(actions.chat.storeSingleMsg(data.payload));
};

function* handleSendMsg(data: ReturnType<typeof actions.chat.sendMsgRequesting>): {} {
  try {
    yield put(actions.chat.sendMsgRequested());
    yield call(wait, 1);
    yield put(actions.chat.sendMsgSuccess());
    const response = yield call(apiCalls.sendMessage.call, data.payload);
    yield put(actions.chat.storeSingleMsg(response.data));
  } catch (error) {}
}

const chatSaga = function* root() {
  yield takeEvery(types.CHAT.STORE, (data: any) => handleIncomingMsg(data));
  yield takeEvery(types.CHAT.SEND_REQUESTING, (text: any) => handleSendMsg(text));
};

export default chatSaga;
