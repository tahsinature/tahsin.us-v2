import { BaseCall } from 'src/api/baseCall';
import { IApiResponses } from 'src/interfaces/apiResponse';

export class GetList extends BaseCall<IApiResponses.IGetList> {
  public method = 'GET';
  public name = 'Get list api';
  public description = 'Get list of some type of items';

  call = (type: string) => {
    return this._baseCall(`/visitor/list/${type}`);
  };
}
