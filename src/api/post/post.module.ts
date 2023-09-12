import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post } from '@entity/api/post/post.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigAsync } from 'src/data/segurity-config/jwt/jwt.config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigAsync,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
