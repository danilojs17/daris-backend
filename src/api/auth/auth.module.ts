import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../data/segurity-config/jwt/strategy/jwt.estrategy';
import { JwtConfigAsync } from 'src/data/segurity-config/jwt/jwt.config';
import { UserModule } from '@api/user/user.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      useClass: JwtConfigAsync,
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
