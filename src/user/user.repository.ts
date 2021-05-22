import { BadRequestException } from '@nestjs/common';
import { User } from 'src/entities/user';
import { EntityRepository, Repository } from 'typeorm';
import { UserRequestDto } from './dto/userRequestDto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async addUser(userDto: UserRequestDto) {
    try {
      return await this.save(userDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.find({});
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
