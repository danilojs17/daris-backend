import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SocketMessage } from './interfaces/socket.interfaces';
export declare class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private eventEmitter;
    server: Server;
    private logger;
    constructor(eventEmitter: EventEmitter2);
    handleMessage(client: Socket, payload: SocketMessage): void;
    handleOutgoing(payload: SocketMessage): void;
    afterInit(server: Server): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    sendMessage(channel: string, message: string): void;
}
