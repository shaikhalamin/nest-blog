import { BadRequestException } from '@nestjs/common';
import { Profile } from 'src/entities/profile';
import { EntityRepository, Repository } from 'typeorm';
import { ProfileRequestDto } from '../dto/profile.request.dto';

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {
  async addProfile(profileDto: ProfileRequestDto): Promise<Profile> {
    try {
      const profile = Object.assign(new Profile(), profileDto);
      return await this.save(profile);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
