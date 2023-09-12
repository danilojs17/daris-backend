import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';
import { Public } from '../../data/decorator/routes-public.decorator';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() userData: LoginDto) {
    return this.authService.login(userData);
  }
}
