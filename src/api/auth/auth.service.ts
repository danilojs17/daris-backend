import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IAuth } from '@interface/api/auth/auth.interface';
import { IUser } from '@interface/api/user/user.interface';
import { UserService } from '@api/user/user.service';
import { IJwtToken } from '@interface/api/auth/jwt.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtTokenService: JwtService,
  ) {}

  public async login({
    password,
    username,
    remenber,
  }: LoginDto): Promise<IAuth> {
    const userDb: IUser = await this.userService.findWithCondition({
      username,
    });

    if (!userDb || !bcrypt.compareSync(password, userDb.userPassword))
      throw new UnauthorizedException({
        message: 'Invalid credentials',
      });

    const tokenData: IJwtToken = {
      userId: userDb.userId,
      userFullname: userDb.userFullname,
      userLastname: userDb.userLastname,
      username: userDb.username,
    };

    const token: string = this.createToken(tokenData, remenber);

    return {
      token,
    };
  }

  private createToken(payloadToken: IJwtToken, remenber: boolean): string {
    return this.jwtTokenService.sign(payloadToken, {
      expiresIn: remenber ? '30d' : '2h',
    });
  }
}
