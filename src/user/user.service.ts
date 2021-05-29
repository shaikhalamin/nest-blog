import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User } from 'src/entities/user';
import { ServiceInterface } from 'src/shared/interface/service.interface';
import { UserResponse } from './dto/user.response';
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
    const user = await this.userRepository.findByUserName(username);
    return user;
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
  update(id: number, body: any, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
