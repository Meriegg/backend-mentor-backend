import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('test')
  async test(): Promise<string> {
    return this.authService.test();
  }
}
