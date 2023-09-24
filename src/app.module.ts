import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from '../common/helper/env.helper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmConfigAsync } from './data/database-config/typeorm-sql/typeorm.config';
import { AllExceptionsFilter } from '@interceptor/catch/catch.interceptor';
import { ResponseInterceptor } from '@interceptor/response/response.interceptor';
import { ApiModule } from '@api/api.module';
import { SocketModule } from '@shared/socket/socket.module';
import { PostManagerModule } from './core/post-manager/post-manager.module';
import { MessagesManagerModule } from './core/messages-manager/messages-manager.module';

const envFilePath: string = getEnvPath(`${__dirname}/../common/envs`);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    EventEmitterModule.forRoot({ delimiter: '.' }),
    TypeOrmModule.forRootAsync(TypeOrmConfigAsync),
    MorganModule,
    SocketModule,
    ApiModule,
    PostManagerModule,
    MessagesManagerModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('dev'),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
