import { BadRequestException } from '@nestjs/common';
import { Experience } from 'src/entities/experience';
import { Profile } from 'src/entities/profile';
import { User } from 'src/entities/user';
import { EntityRepository, Repository } from 'typeorm';
import { ExperienceDto, ExperienceUpdateRequest } from '../dto/experience.dto';

@EntityRepository(Experience)
export class ExperienceRepository extends Repository<Experience> {
  async addExperience(
    experienceRequestDto: ExperienceDto,
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

  async updateExperience(
    experience: Experience,
    profile: Profile,
    experienceUpdateDto: ExperienceUpdateRequest,
  ): Promise<Experience> {
    try {
      const updated_experience = Object.assign(experience, experienceUpdateDto);
      updated_experience.profile = profile;
      return await this.save(updated_experience);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
