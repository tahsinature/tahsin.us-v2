import { IApiResponses } from '../../interfaces/apiResponse';
import { BaseCall } from '../baseCall';

export class GetMessages extends BaseCall<IApiResponses.IGetMessages> {
  public method = 'GET';
  public name = 'get messages';
  public description = 'get message';

  call = (page = 1) => {
    return this._baseCall(`/visitor/messages?page=${page}`, {});
  };
}
