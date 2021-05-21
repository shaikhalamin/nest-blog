import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { error } from 'node:console';
import { config } from 'rxjs';
import { User } from 'src/entities/user';
import { UserResponse } from './dto/user.response';
import { UserRequestDto } from './dto/userRequestDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  @UsePipes(new ValidationPipe())
  async addUser(@Body() userDto: UserRequestDto): Promise<UserResponse> {
    try {
      return await this.userService.addUser(userDto);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get('/all')
  getUser() {
    return `hello ${process.env.MYSQL_DATABASE}--v2-- ${process.env.MYSQL_HOST}`;
  }
}
