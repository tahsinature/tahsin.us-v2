import { BaseCall } from 'src/api/baseCall';
import { IApiResponses } from 'src/interfaces/apiResponse';

export class GetMessages extends BaseCall<IApiResponses.IGetMessages> {
  public method = 'GET';
  public name = 'get messages';
  public description = 'get message';

  call = (page = 1) => {
    return this._baseCall(`/visitor/messages?page=${page}`, {});
  };
}
