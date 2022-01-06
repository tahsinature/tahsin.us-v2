import { BaseCall } from 'src/api/baseCall';
import { IApiResponses } from 'src/interfaces/apiResponse';

export class GetJSON extends BaseCall<IApiResponses.IGetJSON> {
  public method = 'GET';
  public name = 'Get JSON data';
  public description = 'get JSON data by key from redis';

  call = (id: string) => {
    return this._baseCall(`/visitor/json/${id}`);
  };
}
