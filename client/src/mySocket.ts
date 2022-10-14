import socketIOClient, { Socket } from 'socket.io-client';
import EventEmitter from 'events';

import config from './config';
import actions from './actions';
import { IApiResponses } from 'src/interfaces/apiResponse';
import storeManager from 'src/store/storeManager';

class MySocket {
  private socket!: Socket;
  public events = {
    NEW_MESSAGE: 'NEW_MESSAGE',
  };

  e = new EventEmitter();

  async init(): Promise<Socket> {
    this.socket = socketIOClient(config.backEndBaseUrl, {
      reconnection: false,
      reconnectionAttempts: 5,
      reconnectionDelay: 10000,
    });

    const socket = this.socket;

    socket.on('connect', () => {
      this.e.emit('connect');
      console.log(`socket connection established: ${this.socket.id}`);
    });
    socket.on('disconnect', () => {
      console.log(`socket disconnected`);
      this.e.emit('disconnect');
    });
    socket.on('connect_error', (error: any) => {
      this.handleError(error);
    });
    socket.on('reconnect_error', (error: any) => {
      this.handleError(error);
    });
    socket.on('error', (error: any) => {
      this.handleError(error);
    });

    socket.on(this.events.NEW_MESSAGE, (data: IApiResponses.ISendMessage) => {
      storeManager.dispatch(actions.chat.storeSingleMsg(data));
    });

    return new Promise(res => {
      if (this.socket.connected) res(this.socket);
      else socket.on('SOCKET_CONNECTED', () => res(this.socket));
    });
  }

  getSocket() {
    return this.socket;
  }

  handleError = (err: Error) => {
    console.log(`socket err`, err.message);
  };
}

export default new MySocket();
