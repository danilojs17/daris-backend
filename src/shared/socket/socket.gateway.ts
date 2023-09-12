import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Injectable, Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { SocketMessage } from './interfaces/socket.interfaces';

@Injectable()
@WebSocketGateway({ cors: { origin: '*' }, path: '/main' })
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('SocketGateway');
  constructor(private eventEmitter: EventEmitter2) {}

  @SubscribeMessage('message')
  public handleMessage(client: Socket, payload: SocketMessage) {
    const { event, message } = payload;
    this.eventEmitter.emit(`${event}`, message);
  }

  @OnEvent('emit')
  handleOutgoing(payload: SocketMessage) {
    const { event, message } = payload;
    this.server.emit(event, message);
  }

  public afterInit(server: Server) {
    this.logger.log('SocketGateway initialized');
    this.server = server;
  }

  public handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  public handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  public sendMessage(channel: string, message: string) {
    this.server.emit(channel, message);
  }
}
