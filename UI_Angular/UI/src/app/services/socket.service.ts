import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private static readonly SOCKET_IO_SERVER_URI: string = 'http://localhost:3000'
  private readonly _socket: Socket;

  constructor() {
    this._socket = io(SocketService.SOCKET_IO_SERVER_URI);
  }

  emit(event: string | null, payload: any): Socket<DefaultEventsMap, DefaultEventsMap> {
    return this._socket.emit(event, payload);
  }

  listenFor(event: string | null) {
    return SocketService.observableOf((subscriber: Subscriber<any>) => {
      this._socket.on(event, (payload) => subscriber.next(payload));
    });
  }

  private static observableOf(subscribe: (subscriber: Subscriber<any>) => any) {
    return new Observable(subscribe);
  }
}
