import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { IAuth } from '@interface/api/auth/auth.interface';
import { UserService } from '@api/user/user.service';
export declare class AuthService {
    private userService;
    private jwtTokenService;
    constructor(userService: UserService, jwtTokenService: JwtService);
    login({ password, username, remenber, }: LoginDto): Promise<IAuth>;
    private createToken;
}
