import { IApiResponses } from '../../interfaces/apiResponse';
import { BaseCall } from '../baseCall';

export class GetMarkdown extends BaseCall<IApiResponses.IGetMarkdown> {
  public method = 'GET';
  public name = 'Get markdown api';
  public description = 'Get markdown by mongodb object id';

  call = (id: string) => {
    return this._baseCall(`/visitor/md/${id}`);
  };
}
