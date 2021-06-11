import { BadRequestException } from '@nestjs/common';
import { Experience } from 'src/entities/experience';
import { Profile } from 'src/entities/profile';
import { User } from 'src/entities/user';
import { EntityRepository, Repository } from 'typeorm';
import { ExperienceRequest } from '../dto/experience.dto';
import { ProfileUpdateDto } from '../dto/profile.update.request.dto';

@EntityRepository(Experience)
export class ExperienceRepository extends Repository<Experience> {
  async addExperience(
    experienceRequestDto: ExperienceRequest,
    profile?: Profile,
  ): Promise<Experience> {
    try {
      const experience = Object.assign(new Experience(), experienceRequestDto);
      experience.profile = profile;
      return await this.save(experience);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findById(id: number): Promise<Experience> {
    try {
      return this.findOne(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateProfile(
    experience: Experience,
    profileUpdateDto: ProfileUpdateDto,
  ): Promise<Experience> {
    try {
      const updated_experience = Object.assign(experience, profileUpdateDto);
      return await this.save(updated_experience);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
