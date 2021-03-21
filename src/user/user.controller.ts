import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { config } from 'rxjs';
import { User } from 'src/entities/user';
import { UserRequestDto } from './dto/userRequestDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  @UsePipes(new ValidationPipe())
  async addUser(@Res() res, @Body() userDto: UserRequestDto): Promise<User> {
    try {
      const result = await this.userService.addUser(userDto);
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/all')
  getUser() {
    return 'hello';
  }
}
