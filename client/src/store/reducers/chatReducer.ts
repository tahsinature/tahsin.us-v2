import { actionTypes } from '../../actions';
import { IReducers } from '../../interfaces/reducers';

const initialState: IReducers.IChatReducer = {
  messages: [],
  sendingMsg: false,
};

const chatReducer = (state = initialState, action: any) => {
  if (action.type === actionTypes.CHAT.STORE) return { ...state, messages: state.messages.concat(action.payload) };

  if (action.type === actionTypes.CHAT.STORE_MULTIPLE) return { ...state, messages: state.messages.concat(action.payload) };

  if (action.type === actionTypes.CHAT.SEND_REQUESTED) return { ...state, sendingMsg: true };

  if (action.type === actionTypes.CHAT.SEND_SUCCESS) return { ...state, sendingMsg: false };

  return state;
};

export default chatReducer;
