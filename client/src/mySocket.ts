import socketIOClient, { Socket } from 'socket.io-client';
import config from './config';
import EventEmitter from 'events';
import { IApiResponses } from './interfaces/apiResponse';
import storeManager from './store/storeManager';
import actions from './actions';

class MySocket {
  private socket!: Socket;
  public events = {
    NEW_MESSAGE: 'NEW_MESSAGE',
  };

  e = new EventEmitter();

  async init(): Promise<Socket> {
    this.socket = socketIOClient(`${config.backEndBaseUrl}/visitor`, {
      withCredentials: true,
      extraHeaders: { 'connection-id': config.connectionId },
      // path: '/socket.io',
    });

    const socket = this.socket;

    // socket.on('*', ({ data }) => {
    //   const [eventName, message] = data;
    //   this.e.emit(eventName, message);
    //   console.log(eventName, message);
    // });
    socket.on('connect', () => {
      console.log(`socket connection established: ${this.socket.id}`);
    });
    socket.on('disconnect', () => {
      console.log(`socket disconnected`);
      this.e.emit('disconnect');
    });
    socket.on('connect_error', error => {
      this.handleError(error);
    });
    socket.on('reconnect_error', error => {
      this.handleError(error);
    });
    socket.on('error', error => {
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
