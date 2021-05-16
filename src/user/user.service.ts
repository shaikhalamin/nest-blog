import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UserResponse } from './dto/user.response';
import { UserRequestDto } from './dto/userRequestDto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async addUser(userDto: UserRequestDto): Promise<UserResponse> {
    return plainToClass(
      UserResponse,
      await this.userRepository.addUser(userDto),
    );
  }
}
