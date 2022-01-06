import { BaseCall } from 'src/api/baseCall';
import { IApiResponses } from 'src/interfaces/apiResponse';

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
