import { Injectable } from '@nestjs/common';
import { Experience } from 'src/entities/experience';
import { ServiceInterface } from 'src/shared/interface/service.interface';
import { ExperienceDto, ExperienceUpdateRequest } from '../dto/experience.dto';
import { ExperienceRepository } from '../repository/experience.repository';
import { ProfileService } from './profile.service';

@Injectable()
export class ExperienceService implements ServiceInterface {
  constructor(
    private experienceRepository: ExperienceRepository,
    private profileService: ProfileService,
  ) {}

  async add(experienceRequestDto: ExperienceDto): Promise<Experience> {
    const profile = await this.profileService.findById(
      experienceRequestDto.profile_id,
    );
    return await this.experienceRepository.addExperience(
      experienceRequestDto,
      profile,
    );
  }
  async findById(id: number): Promise<Experience> {
    return await this.experienceRepository.findById(id);
  }
  async update(
    id: number,
    experienceUpdateDto: ExperienceUpdateRequest,
  ): Promise<Experience> {
    const experience = await this.findById(id);
    const profile = await this.profileService.findById(
      experienceUpdateDto.profile_id,
    );
    return this.experienceRepository.updateExperience(
      experience,
      profile,
      experienceUpdateDto,
    );
  }
  delete(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
