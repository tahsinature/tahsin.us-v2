import variables from './constants/variables';

class Config {
  public backEndBaseUrl = process.env.REACT_APP_API_SERVER || 'http://localhost:3001';
  private _connectionId: string | null = localStorage.getItem(variables.connectionId);

  public get connectionId() {
    return this._connectionId as string;
  }

  public set connectionId(value: string) {
    localStorage.setItem(variables.connectionId, value);
    this._connectionId = value;
  }
}

export default new Config();
