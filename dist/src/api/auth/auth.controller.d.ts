import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userData: LoginDto): Promise<import("../../data/interface/api/auth/auth.interface").IAuth>;
}
