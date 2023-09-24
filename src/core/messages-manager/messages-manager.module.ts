import { Module } from '@nestjs/common';
import { MessagesManagerService } from './messages-manager.service';

@Module({
  providers: [MessagesManagerService]
})
export class MessagesManagerModule {}
