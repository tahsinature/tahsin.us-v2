import { IApiResponses } from '../../interfaces/apiResponse';
import { BaseCall } from '../baseCall';

export class GetChats extends BaseCall<IApiResponses.IGetChats> {
  public method = 'GET';
  public name = 'Get chats api';
  public description = 'get all chats api. all tho visitor api supposed to get only one chat (with admin)';

  call = () => {
    return this._baseCall(`/visitor/chats`);
  };
}
