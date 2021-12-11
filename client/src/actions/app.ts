import { APP } from './actionTypes';

export const toggleTheme = () => ({
  type: APP.TOGGLE_THEME,
});

export const loadAppStart = () => ({
  type: APP.LOAD_APP_START,
});

export const loadAppDone = () => ({
  type: APP.LOAD_APP_DONE,
});

export const requestBasicData = () => ({
  type: APP.GET_BASIC_DATE_REQUEST,
});

export const responseBasicData = (payload: any) => ({
  type: APP.GET_BASIC_DATE_SUCCESS,
  payload,
});
