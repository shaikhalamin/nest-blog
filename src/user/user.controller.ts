import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserResponse } from './dto/user.response';
import { UserRequestDto } from './dto/userRequestDto';
import { UserService } from './user.service';
import { plainToClass } from 'class-transformer';
import { ControllerInterface } from 'src/shared/interface/controller.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController implements ControllerInterface {
  constructor(private userService: UserService) {}

  @Get('/')
  async index(
    @Query() query: any,
    @Req() request: Request,
  ): Promise<UserResponse[]> {
    return await this.userService.findAll(query);
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(@Body() userDto: UserRequestDto): Promise<UserResponse> {
    return await this.userService.add(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async show(@Param('id') id: number, @Request() req): Promise<UserResponse> {
    return plainToClass(UserResponse, await this.userService.findById(id));
  }
  edit(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }
  destroy(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
