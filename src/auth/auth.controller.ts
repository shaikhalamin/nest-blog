import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
    try {
      return await this.authService.login(loginDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
