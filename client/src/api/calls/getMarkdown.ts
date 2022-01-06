import { BaseCall } from 'src/api/baseCall';
import { IApiResponses } from 'src/interfaces/apiResponse';

export class GetMarkdown extends BaseCall<IApiResponses.IGetMarkdown> {
  public method = 'GET';
  public name = 'Get markdown api';
  public description = 'Get markdown by mongodb object id';

  call = (id: string) => {
    return this._baseCall(`/visitor/md/${id}`);
  };
}
