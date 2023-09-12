import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigAsync } from 'src/data/segurity-config/jwt/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '@entity/api/comment/comment.entity';

@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigAsync,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Comment]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
