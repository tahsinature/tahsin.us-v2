import axiosAdapters from '../axiosAdapters';
import { GetBasicData } from './getBasicData';
import { GetList } from './getList';
import { GetMarkdown } from './getMarkdown';
import { GetChats } from './getChats';
import { SendMessage } from './sendMessage';
import { GetMessages } from './getMessages';
import { InitConnection } from './initConnection';
import { GetJSON } from './getJSON';

const apiCalls = {
  getBasicData: new GetBasicData(axiosAdapters.backendAxios),
  getMarkdown: new GetMarkdown(axiosAdapters.backendAxios),
  getList: new GetList(axiosAdapters.backendAxios),
  getChat: new GetChats(axiosAdapters.backendAxios),
  sendMessage: new SendMessage(axiosAdapters.backendAxios),
  getMessages: new GetMessages(axiosAdapters.backendAxios),
  initConnection: new InitConnection(axiosAdapters.backendAxios),
  getJSON: new GetJSON(axiosAdapters.backendAxios),
};

export default apiCalls;
