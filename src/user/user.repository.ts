import { BadRequestException } from '@nestjs/common';
import { User } from 'src/entities/user';
import { EntityRepository, Repository } from 'typeorm';
import { UserRequestDto } from './dto/userRequestDto';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async addUser(userDto: UserRequestDto): Promise<User> {
    try {
      const user = Object.assign(new User(), userDto);
      return await this.save(user);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.find({});
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findById(id: number): Promise<User> {
    try {
      return this.findOne(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findByUserName(username: string): Promise<User> {
    try {
      return await this.findOne({ username });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
