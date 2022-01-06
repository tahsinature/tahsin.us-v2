import { BaseCall } from 'src/api/baseCall';
import { IApiResponses } from 'src/interfaces/apiResponse';

export class GetChats extends BaseCall<IApiResponses.IGetChats> {
  public method = 'GET';
  public name = 'Get chats api';
  public description = 'get all chats api. all tho visitor api supposed to get only one chat (with admin)';

  call = () => {
    return this._baseCall(`/visitor/chats`);
  };
}
