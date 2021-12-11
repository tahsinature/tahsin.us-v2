import { actionTypes } from '../../actions';
import { IReducers } from '../../interfaces/reducers';

const initialState: IReducers.IAppReducer = {
  appTheme: 'light',
  isAppLoaded: false,
  basicData: null,
};

const appReducer = (state = initialState, action: any): typeof initialState => {
  if (action.type === actionTypes.APP.TOGGLE_THEME) return { ...state, appTheme: state.appTheme === 'dark' ? 'light' : 'dark' };

  if (action.type === actionTypes.APP.GET_BASIC_DATE_SUCCESS) return { ...state, basicData: action.payload };

  if (action.type === actionTypes.APP.LOAD_APP_DONE) return { ...state, isAppLoaded: true };

  return state;
};

export default appReducer;
