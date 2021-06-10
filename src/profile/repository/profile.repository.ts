import { BadRequestException } from '@nestjs/common';
import { Profile } from 'src/entities/profile';
import { User } from 'src/entities/user';
import { EntityRepository, Repository } from 'typeorm';
import { ProfileRequestDto } from '../dto/profile.request.dto';
import { ProfileUpdateDto } from '../dto/profile.update.request.dto';

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {
  async addProfile(
    profileDto: ProfileRequestDto,
    user: User,
  ): Promise<Profile> {
    try {
      const profile = Object.assign(new Profile(), profileDto);
      profile.user = user;
      return await this.save(profile);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findById(id: number): Promise<Profile> {
    try {
      return this.findOne(id, { relations: ['user'] });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateProfile(
    profile: Profile,
    profileUpdateDto: ProfileUpdateDto,
  ): Promise<Profile> {
    try {
      const updated_profile = Object.assign(profile, profileUpdateDto);
      return await this.save(updated_profile);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
