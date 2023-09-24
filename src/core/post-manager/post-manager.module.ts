import { Module } from '@nestjs/common';
import { PostManagerService } from './post-manager.service';

@Module({
  providers: [PostManagerService]
})
export class PostManagerModule {}
