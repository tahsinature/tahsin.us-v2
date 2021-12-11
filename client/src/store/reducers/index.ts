import { combineReducers } from 'redux';

import appReducer from './appReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  appReducer,
  chatReducer,
});

export default rootReducer;
