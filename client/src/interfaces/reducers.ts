import { IApiResponses } from './apiResponse';

export namespace IReducers {
  export type IAppReducer = {
    appTheme: 'light' | 'dark';
    isAppLoaded: boolean;
    basicData: null | IApiResponses.IGetBasicData;
  };

  export type IChatReducer = {
    messages: IApiResponses.ISendMessage[];
    sendingMsg: boolean;
  };
}
