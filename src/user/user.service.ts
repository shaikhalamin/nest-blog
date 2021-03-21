import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user';
import { UserRequestDto } from './dto/userRequestDto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async addUser(userDto: UserRequestDto): Promise<User> {
    return await this.userRepository.addUser(userDto);
  }
}
