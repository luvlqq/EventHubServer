import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  login(dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register user' })
  register(dto: AuthDto) {
    return this.authService.register(dto);
  }

  @Get('signout')
  @ApiOperation({ summary: 'Sign out user' })
  signout() {
    return this.authService.signout();
  }
}
