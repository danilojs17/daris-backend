import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@guard/auth.guard';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [AuthModule, UserModule, PostModule, CommentModule, MessagesModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class ApiModule {}
