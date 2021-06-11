import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User } from 'src/entities/user';
import { ServiceInterface } from 'src/shared/interface/service.interface';
import { UserResponse } from './dto/user.response';
import { UserUpdateRequestDto } from './dto/user.update.request.dto';
import { UserRequestDto } from './dto/userRequestDto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService implements ServiceInterface {
  constructor(private userRepository: UserRepository) {}

  async findAll(query?: any): Promise<UserResponse[]> {
    return plainToClass(UserResponse, await this.userRepository.findAll());
  }
  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException('User not found !');
    }
    return user;
  }
  async findByUserName(username: string): Promise<User> {
    return await this.userRepository.findByUserName(username);
  }
  async add(userDto: UserRequestDto): Promise<UserResponse> {
    const user = await this.findByUserName(userDto.username);
    if (user) {
      throw new BadRequestException('User already exists !');
    }
    return plainToClass(
      UserResponse,
      await this.userRepository.addUser(userDto),
    );
  }

  async update(
    id: number,
    userUpdateRequestDto: UserUpdateRequestDto,
  ): Promise<User> {
    const user = await this.findById(id);
    return await this.userRepository.updateUser(user, userUpdateRequestDto);
  }
  delete(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
