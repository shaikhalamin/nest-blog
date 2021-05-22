import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserResponse } from './dto/user.response';
import { UserRequestDto } from './dto/userRequestDto';
import { UserService } from './user.service';
import { Request } from 'express';

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
  async getUser(@Req() request: Request): Promise<UserResponse[]> {
    try {
      console.log('user ip', request.ip);
      console.log('request in all', request.headers);
      return await this.userService.findAll();
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
