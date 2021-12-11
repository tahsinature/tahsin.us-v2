import { IApiResponses } from '../../interfaces/apiResponse';
import { BaseCall } from '../baseCall';

export class InitConnection extends BaseCall<IApiResponses.IInitConnection> {
  public method = 'POST';
  public name = 'Initialize the connection';
  public description = 'get connection details';

  call = (connectionId: string) => {
    return this._baseCall(`/visitor/connection`, {
      connectionId,
    });
  };
}
