import { BaseCall } from 'src/api/baseCall';
import { IApiResponses } from 'src/interfaces/apiResponse';

export class GetBasicData extends BaseCall<IApiResponses.IGetBasicData> {
  public method = 'GET';
  public name = 'Get basic data api api';
  public description = 'Get basic data';

  call = () => {
    return this._baseCall(`/visitor/basic-data`);
  };
}
