import { User } from 'src/entities/user';
import { EntityRepository, Repository } from 'typeorm';
import { UserRequestDto } from './dto/userRequestDto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async addUser(userDto: UserRequestDto): Promise<User> {
    return await this.save(userDto);
  }
}
