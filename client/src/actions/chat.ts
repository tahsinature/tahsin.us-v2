import { IApiResponses } from '../interfaces/apiResponse';
import { CHAT } from './actionTypes';

export const storeSingleMsg = (data: IApiResponses.ISendMessage) => ({
  type: CHAT.STORE,
  payload: data,
});

export const storeMultipleMsgs = (data: IApiResponses.ISendMessage[]) => ({
  type: CHAT.STORE_MULTIPLE,
  payload: data,
});

export const sendMsgRequesting = (text: string) => ({
  type: CHAT.SEND_REQUESTING,
  payload: text,
});

export const sendMsgRequested = () => ({
  type: CHAT.SEND_REQUESTED,
});

export const sendMsgSuccess = () => ({
  type: CHAT.SEND_SUCCESS,
});
