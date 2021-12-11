import { AxiosInstance, Method } from 'axios';
import config from '../config';

export abstract class BaseCall<ResponseType> {
  constructor(private axios: AxiosInstance) {}

  abstract method: string;
  abstract name: string;
  abstract description: string;

  async _baseCall(url: string, body?: Record<string, any>, additionalHeaders?: Record<string, string>) {
    if (!['get', 'post', 'put', 'delete'].includes(this.method.toLowerCase())) throw new Error(`method (${this.method}) not supported for api: ${this.name}`);

    const response = await this.axios.request<ResponseType>({
      method: this.method.toLowerCase() as Method,
      url,
      data: { ...body },
      headers: {
        ...additionalHeaders,
        'connection-id': config.connectionId,
      },
    });

    const { requestId, httpCode, data, errors, message, flag } = response.data as any;

    const dataToReturn: {
      httpCode: number;
      requestId: string;
      errors: string[];
      data: ResponseType;
      message: string;
      flag?: string;
    } = {
      httpCode,
      requestId,
      data,
      errors,
      message,
      flag,
    };

    return dataToReturn;
  }
}
