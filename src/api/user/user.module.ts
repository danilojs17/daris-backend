import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@entity/api/user/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigAsync } from 'src/data/segurity-config/jwt/jwt.config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigAsync,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
